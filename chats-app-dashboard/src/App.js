import "./App.css";
import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import { Card, Descriptions, Divider, List, Button } from "antd";
import SideMenu from "../src/component/SlideMenu";
import AppRoute from "./component/AppRoute";
import { Routes, Route } from "react-router-dom";
import { Layout, Image, message } from "antd";
import { useNavigate } from "react-router-dom";
Amplify.configure(awsconfig);
const { Sider, Content, Footer } = Layout;

function App() {
  // const [isAdmin, setIsAdmin] = useState(false);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   checkUserAdmin();
  // }, []);

  // const checkUserAdmin = async () => {
  //   try {
  //     const currentUser = await Auth.currentAuthenticatedUser();
  //     const userGroups =
  //       currentUser.signInUserSession.accessToken.payload["cognito:groups"];
  //     const isAdmin = userGroups.includes("Admin");
  //     setIsAdmin(isAdmin);
  //   } catch (error) {
  //     console.log("Lỗi xác thực người dùng:", error);
  //   }
  // };

  // if (!isAdmin) {
  //   message.error("Bạn không có quyền truy cập vào trang này.");
  //   navigate("/");
  // }

  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="data:image/png;base64,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"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <AppRoute />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          trong.doanngoc2023@gmail.com
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
