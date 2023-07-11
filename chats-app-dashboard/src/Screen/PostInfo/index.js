import React, { useEffect, useState } from "react";
import { Card, Descriptions, Divider, Button, Popconfirm, message } from "antd";
import { useParams } from "react-router-dom";
import { DataStore, Storage } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Post, User, Comment, Like, Share } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { ProgressTypes } from "antd/es/progress/progress";
dayjs.extend(relativeTime);

const PostInfor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  // console.log(post);
  useEffect(() => {
    const fetchPostData = async () => {
      const post = await DataStore.query(Post, id);

      const likes = await DataStore.query(Like, (c) => c.postID.eq(post?.id));
      const comments = await DataStore.query(Comment, (c) =>
        c.postID.eq(post?.id)
      );
      const shares = await DataStore.query(Share, (c) => c.postID.eq(post?.id));

      const updatedPost = {
        ...post,
        likes: likes.length,
        comments: comments.length,
        shares: shares.length,
      };

      setPost(updatedPost);
    };

    fetchPostData();
  }, [id]);

  useEffect(() => {
    if (post?.postUserId) {
      DataStore.query(User, post.postUserId).then(setUser);
    }
  }, [post?.postUserId]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const url = await Storage.get(post?.image);
        setImageUrl(url);
      } catch (error) {
        console.log("Error fetching image from S3: ", error);
      }
    }

    if (post?.image) {
      fetchImage();
    }
  }, [post]);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };
  const handleDelete = async (post) => {
    try {
      await DataStore.delete(Post, id);
      setPost(null);
      navigate("/posts");
      message.success("Post deleted successfully!");
    } catch (error) {
      console.log("Error deleting post:", error);
      message.error("Failed to delete post.");
    }
  };
  console.log("id", id);

  return (
    <Card title={`Post ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="User post">{user?.name}</Descriptions.Item>
        <Descriptions.Item label="Content">{post?.content}</Descriptions.Item>
        {imageUrl && (
          <Descriptions.Item label="Image">
            <img
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              src={imageUrl}
              alt="S3 Image"
            />
          </Descriptions.Item>
        )}
        <Descriptions.Item label="CreatedAt">
          {formatDate(post?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Like">{post?.likes}</Descriptions.Item>
        <Descriptions.Item label="Comment">{post?.comments}</Descriptions.Item>
        <Descriptions.Item label="Share">{post?.shares}</Descriptions.Item>
      </Descriptions>
      <Divider />
      {/* <List
        dataSource={post}
        renderItem={(postItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>{postItem.User.name}</div>
            <div>{postItem.description}</div>
            <div>{postItem.numberOfLikes}</div>
          </List.Item>
        )}
      /> */}
      <Popconfirm
        placement="topLeft"
        title="Are you sure you want to delete this post?"
        onConfirm={handleDelete}
        okText="Delete"
        cancelText="Cancel"
      >
        <Button block type="primary" size="large">
          Delete Post
        </Button>
      </Popconfirm>
    </Card>
  );
};

export default PostInfor;
