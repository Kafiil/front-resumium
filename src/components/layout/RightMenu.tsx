import React, { Component } from "react";
import { Menu, Icon } from "antd";
const { Item } = Menu;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        {/* <span>User</span> */}
        <Item key="mail">
          <a href="/">Signin</a>
        </Item>
        <Item autoSave="false" key="app">
          <a href="/">Signup</a>
        </Item>
      </Menu>
    );
  }
}
export default RightMenu;
