import React, { useEffect, useState } from "react";
import { Card, Table, Input, Popconfirm, Button, message } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Auth, DataStore, Storage } from "aws-amplify";
import { SortDirection } from "@aws-amplify/datastore";
import { Comment } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
const { Search } = Input;
const CommentManager = () => {
  const [comments, setComments] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredComments, setFilteredComments] = useState(comments);

  const handleSearch = (value) => {
    setSearchValue(value);

    if (value === "") {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(
        (comment) =>
          comment.content.toLowerCase().includes(value.toLowerCase()) ||
          comment.id.toString().toLowerCase().includes(value.toLowerCase())
      );

      setFilteredComments(filtered);
    }
  };

  const fetchComments = async () => {
    const fetchedComments = await DataStore.query(Comment, null, {
      sort: (comment) => comment.createdAt(SortDirection.DESCENDING),
    });

    setComments(fetchedComments);
    setFilteredComments(fetchedComments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const deleteComment = async (comment) => {
    try {
      await DataStore.delete(Comment, comment.id);
      setComments((prevComments) =>
        prevComments.filter((c) => c.id !== comment.id)
      );
      message.success("Comment deleted successfully!");
      fetchComments();
    } catch (error) {
      console.log("Error deleting comment:", error);
      message.error("Failed to delete comment.");
    }
  };

  const tableColumns = [
    {
      title: "Comment ID",
      dataIndex: "id",
      key: "id",
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
      title: "Comment UserId",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Comment PostId",
      dataIndex: "postID",
      key: "postID",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Popconfirm
          placement="topLeft"
          title={"Are you sure you want to delete this comment?"}
          onConfirm={() => deleteComment(item)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Remove</Button>
        </Popconfirm>
      ),
    },
  ];

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };
  console.log("comment", comments);
  return (
    <Card title={"Comment"} style={{ margin: 20 }}>
      <Search
        placeholder="Search by content"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table dataSource={filteredComments} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default CommentManager;
