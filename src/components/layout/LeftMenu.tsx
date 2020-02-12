import React, { Component } from "react";
import { Menu, Icon } from "antd";
const { SubMenu, ItemGroup, Item } = Menu;

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Item key="mail">
          <a href="/">Home</a>
        </Item>
        <SubMenu title={<span>Blogs</span>}>
          <ItemGroup title="Item 1">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
          </ItemGroup>
          <ItemGroup title="Item 2">
            <Item key="setting:3">Option 3</Item>
            <Item key="setting:4">Option 4</Item>
          </ItemGroup>
        </SubMenu>
        <Item key="alipay">
          <a href="/">Contact Us</a>
        </Item>
      </Menu>
    );
  }
}
export default LeftMenu;
