import React, { useState, useEffect } from "react";
import { Button, Card, Table, Tag, Input } from "antd";
import userData from "../../assets/data/user.json";
import { Link } from "react-router-dom";
import { User, StatusUser } from "../../models";
import { Navigate, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Auth, DataStore, Storage } from "aws-amplify";
import { SortDirection } from "@aws-amplify/datastore";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
const { Search } = Input;
const UserManager = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (value) => {
    setSearchValue(value);

    if (value === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user?.name.toLowerCase().includes(value.toLowerCase()) ||
          user?.id.toString().toLowerCase().includes(value.toLowerCase())
      );

      setFilteredUsers(filtered);
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await DataStore.query(User, null, {
          sort: (user) => user.createdAt(SortDirection.DESCENDING),
        });
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);
  console.log("user", users);
  const renderState = (state) => {
    const stateToColor = {
      ACTIVE: "green",
      SUSPEND: "red",
    };

    return <Tag color={stateToColor[state]}>{state}</Tag>;
  };
  const tableColumns = [
    {
      title: "User id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
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
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: (createdAt) => formatDate(createdAt),
    },
    {
      title: "Status",
      dataIndex: "state",
      key: "state",
      render: (state) => renderState(state),
    },
  ];
  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    return date.format("HH:mm DD/MM/YYYY");
  };

  const renderNewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">Create User</Button>
    </Link>
  );
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
            style={{ width: "50px", height: "50px", resize: "both" }}
          />
        )}
      </div>
    );
  };

  return (
    <Card
      title={"User Manager"}
      style={{ margin: 20 }}
      extra={renderNewItemButton()}
    >
      <Search
        placeholder="Search by username"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table
        dataSource={filteredUsers}
        columns={tableColumns}
        rowKey="id"
        onRow={(userItem) => ({
          onClick: () => navigate(`/user/${userItem.id}`),
        })}
      />
    </Card>
  );
};

export default UserManager;
