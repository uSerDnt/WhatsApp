import React, { useEffect, useState } from "react";
import { Card, Descriptions, Divider, Button, Popconfirm, message } from "antd";
import { useParams } from "react-router-dom";
import { DataStore, Storage } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { User, Like, ShortVideo } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { ProgressTypes } from "antd/es/progress/progress";
dayjs.extend(relativeTime);

const VideoInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [video, setVideo] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  // console.log(post);
  useEffect(() => {
    const fetchVideoData = async () => {
      const video = await DataStore.query(ShortVideo, id);

      //   const likes = await DataStore.query(Like, (c) => c.postID.eq(post?.id));
      //   const comments = await DataStore.query(Comment, (c) =>
      //     c.postID.eq(post?.id)
      //   );
      //   const shares = await DataStore.query(Share, (c) => c.postID.eq(post?.id));

      //   const updatedPost = {
      //     ...post,
      //     likes: likes.length,
      //     comments: comments.length,
      //     shares: shares.length,
      //   };

      setVideo(video);
    };

    fetchVideoData();
  }, [id]);

  useEffect(() => {
    if (video?.shortVideoUserId) {
      DataStore.query(User, video?.shortVideoUserId).then(setUser);
    }
  }, [video?.shortVideoUserId]);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };
  const handleDelete = async (video) => {
    try {
      await DataStore.delete(ShortVideo, id);
      setVideo(null);
      navigate("/videos");
      message.success("Short video deleted successfully!");
    } catch (error) {
      console.log("Error deleting Short video:", error);
      message.error("Failed to delete Short video.");
    }
  };
  useEffect(() => {
    async function fetchVideo() {
      try {
        const url = await Storage.get(video?.videoUri);
        setVideoUrl(url);
      } catch (error) {
        console.log("Error fetching image from S3: ", error);
      }
    }

    if (video?.videoUri) {
      fetchVideo();
    }
  }, [video]);
  return (
    <Card title={`ShortVideo ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="User post">{user?.name}</Descriptions.Item>
        <Descriptions.Item label="Content">{video?.content}</Descriptions.Item>
        {videoUrl && (
          <Descriptions.Item label="Video">
            <video
              style={{ width: "300px", height: "300px" }}
              src={videoUrl}
              controls
            />
          </Descriptions.Item>
        )}
        <Descriptions.Item label="CreatedAt">
          {formatDate(video?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Like">1</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Popconfirm
        placement="topLeft"
        title="Are you sure you want to delete this video?"
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

export default VideoInfo;
