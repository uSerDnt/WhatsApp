import React, { useEffect, useState } from "react";
import {
  Card,
  Descriptions,
  Divider,
  Button,
  Popconfirm,
  message,
  Select,
} from "antd";
import { useParams } from "react-router-dom";
import { DataStore, Storage } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Post, User, StatusUser } from "../../models";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
const { Option } = Select;
const UserInfor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(user?.state);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchedUser = await DataStore.query(User, id);
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };

    fetchUserData();
  }, [id]);
  console.log("state", user?.state);
  const updateStatus = async (newStatus) => {
    try {
      const user = await DataStore.query(User, id);
      const updatedUser = await DataStore.save(
        User.copyOf(user, (updated) => {
          updated.state = newStatus;
        })
      );
      setSelectedStatus(updatedUser.state);
      message.success("User status updated successfully!");
    } catch (error) {
      console.error("Error updating user status: ", error);
      message.error("Failed to update user status. Please try again.");
    }
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };
  const handleConfirmStatusChange = () => {
    updateStatus(selectedStatus);
  };
  useEffect(() => {
    async function fetchImage() {
      try {
        const url = await Storage.get(user?.image);
        setImageUrl(url);
      } catch (error) {
        console.log("Error fetching image from S3: ", error);
      }
    }

    if (user?.image) {
      fetchImage();
    }
  }, [user]);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };

  return (
    <Card title={`User ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Username">{user?.name}</Descriptions.Item>
        {imageUrl && (
          <Descriptions.Item label="Avatar">
            <img
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              src={imageUrl}
              alt="S3 Image"
            />
          </Descriptions.Item>
        )}
        <Descriptions.Item label="Gender">{user?.gender}</Descriptions.Item>
        <Descriptions.Item label="Birthday">{user?.birthday}</Descriptions.Item>
        <Descriptions.Item label="CreatedAt">
          {formatDate(user?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Select
            defaultValue={user?.state}
            value={selectedStatus}
            onChange={handleStatusChange}
            style={{ width: "120px" }}
          >
            <Option value={StatusUser.ACTIVE}>ACTIVE</Option>
            <Option value={StatusUser.SUSPEND}>SUSPEND</Option>
          </Select>
          <Popconfirm
            title="Are you sure you want to change the user's status?"
            onConfirm={handleConfirmStatusChange}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" style={{ marginLeft: 20 }}>
              Save
            </Button>
          </Popconfirm>
        </Descriptions.Item>
      </Descriptions>
      <Divider />
    </Card>
  );
};

export default UserInfor;
