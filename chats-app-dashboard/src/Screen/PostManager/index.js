import React, { useEffect, useState } from "react";
import { Card, Table, Input } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Auth, DataStore, Storage } from "aws-amplify";
import { SortDirection } from "@aws-amplify/datastore";
import { Post, Comment, Like, Share } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
const { Search } = Input;
const PostManager = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (value) => {
    setSearchValue(value);

    if (value === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.content.toLowerCase().includes(value.toLowerCase()) ||
          post.id.toString().toLowerCase().includes(value.toLowerCase())
      );

      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await DataStore.query(Post, null, {
        sort: (post) => post.createdAt(SortDirection.DESCENDING),
      });

      const updatedPosts = [];

      for (const post of fetchedPosts) {
        const likes = await DataStore.query(Like, (c) => c.postID.eq(post.id));
        const comments = await DataStore.query(Comment, (c) =>
          c.postID.eq(post.id)
        );
        const shares = await DataStore.query(Share, (c) =>
          c.postID.eq(post.id)
        );

        const updatedPost = {
          ...post,
          likes: likes.length,
          comments: comments.length,
          shares: shares.length,
        };

        updatedPosts.push(updatedPost);
      }
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);
    };

    fetchPosts();
  }, []);

  const tableColumns = [
    {
      title: "post ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <div>
          {image ? (
            <CustomS3Image imgKey={image} />
          ) : (
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </div>
      ),
    },
    {
      title: "content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: (createdAt) => formatDate(createdAt),
    },
    {
      title: "Updated at",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt) => formatDate(updatedAt),
    },
    {
      title: "PostUserId",
      dataIndex: "postUserId",
      key: "postUserId",
    },
    {
      title: "Like",
      dataIndex: "likes",
      key: "likes",
    },
    {
      title: "Comment",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "  Share",
      dataIndex: "shares",
      key: "shares",
    },
  ];

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };

  const CustomS3Image = ({ imgKey }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
      async function fetchImage() {
        try {
          const url = await Storage.get(imgKey);
          setImageUrl(url);
        } catch (error) {
          console.log("Error fetching image from S3: ", error);
        }
      }

      fetchImage();
    }, [imgKey]);

    return (
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="S3 Image"
            style={{ width: "50%", height: "50%", resize: "cover" }}
          />
        )}
      </div>
    );
  };

  return (
    <Card title={"Post"} style={{ margin: 20 }}>
      <Search
        placeholder="Search by content"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table
        dataSource={filteredPosts}
        columns={tableColumns}
        rowKey="id"
        onRow={(postItem) => ({
          onClick: () => navigate(`/post/${postItem.id}`),
        })}
      />
    </Card>
  );
};

export default PostManager;
