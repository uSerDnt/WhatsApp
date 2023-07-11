import React from "react";
import PostInfor from "../../Screen/PostInfo";
import UserManager from "../../Screen/UserManager";
import CreateUser from "../../Screen/CreateUser";
import PostManager from "../../Screen/PostManager";
import { Routes, Route } from "react-router-dom";
import UserInfor from "../../Screen/UserInfo";
import CommentManager from "../../Screen/CommentManager";
import VideoManager from "../../Screen/VideoManager";
import VideoInfo from "../../Screen/VideoInfo";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="posts" element={<PostManager />} />
      <Route path="post/:id" element={<PostInfor />} />
      <Route path="user" element={<UserManager />} />
      <Route path="user/create" element={<CreateUser />} />
      <Route path="user/:id" element={<UserInfor />} />
      <Route path="comments" element={<CommentManager />} />
      <Route path="videos" element={<VideoManager />} />
      <Route path="videos/:id" element={<VideoInfo />} />
    </Routes>
  );
};

export default AppRoute;
