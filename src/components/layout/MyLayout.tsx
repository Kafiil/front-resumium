import React from "react";
// import { Layout, Menu, Icon } from "antd";
import { Layout } from "antd";
import Navbar from "./Navbar";
import MyFooter from "./Footer";
// const { SubMenu } = Menu;
const { Footer, Sider, Content } = Layout;

function MyLayout() {
  return <Navbar />;
}

export default MyLayout;
