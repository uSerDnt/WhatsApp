import React, { useEffect, useState } from "react";
import { Card, Table, Input } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Auth, DataStore, Storage } from "aws-amplify";
import { SortDirection } from "@aws-amplify/datastore";
import { Like, ShortVideo } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
const { Search } = Input;
const VideoManager = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videos);

  //   const handleSearch = (value) => {
  //     setSearchValue(value);

  //     if (value === "") {
  //       setFilteredPosts(posts);
  //     } else {
  //       const filtered = posts.filter(
  //         (post) =>
  //           post.content.toLowerCase().includes(value.toLowerCase()) ||
  //           post.id.toString().toLowerCase().includes(value.toLowerCase())
  //       );

  //       setFilteredPosts(filtered);
  //     }
  //   };

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const fetchedPosts = await DataStore.query(Post, null, {
  //         sort: (post) => post.createdAt(SortDirection.DESCENDING),
  //       });

  //       const updatedPosts = [];

  //       for (const post of fetchedPosts) {
  //         const likes = await DataStore.query(Like, (c) => c.postID.eq(post.id));
  //         const comments = await DataStore.query(Comment, (c) =>
  //           c.postID.eq(post.id)
  //         );
  //         const shares = await DataStore.query(Share, (c) =>
  //           c.postID.eq(post.id)
  //         );

  //         const updatedPost = {
  //           ...post,
  //           likes: likes.length,
  //           comments: comments.length,
  //           shares: shares.length,
  //         };

  //         updatedPosts.push(updatedPost);
  //       }
  //       setPosts(updatedPosts);
  //       setFilteredPosts(updatedPosts);
  //     };

  //     fetchPosts();
  //   }, []);
  const fetchVideos = async () => {
    const fetchedVideos = await DataStore.query(ShortVideo, null, {
      sort: (video) => video.createdAt(SortDirection.DESCENDING),
    });

    setVideos(fetchedVideos);
    // setFilteredVideos(fetchedVideos);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  console.log("videos", videos[0]);
  const tableColumns = [
    {
      title: "video ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Uri Video",
      dataIndex: "videoUri",
      key: "videoUri",
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
      title: "User post video",
      dataIndex: "shortVideoUserId",
      key: "shortVideoUserId",
    },
    {
      title: "Like",
      dataIndex: "likes",
      key: "likes",
    },
  ];

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };

  return (
    <Card title={"Post"} style={{ margin: 20 }}>
      <Search
        placeholder="Search by content"
        value={searchValue}
        // onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table
        dataSource={videos}
        columns={tableColumns}
        rowKey="id"
        onRow={(videoItem) => ({
          onClick: () => navigate(`/videos/${videoItem.id}`),
        })}
      />
    </Card>
  );
};

export default VideoManager;
