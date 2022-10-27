import { Link, withRouter } from "react-router-dom";
import {
  DesktopOutlined,
  HomeOutlined,
  MenuOutlined,
  FileOutlined,
  GlobalOutlined,
  AppstoreOutlined,
  SyncOutlined,
  SettingOutlined,
  PartitionOutlined,
  BarChartOutlined,
  UserOutlined
} from '@ant-design/icons';

import { withTranslation } from "react-i18next"
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function SideBar() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="0" onClick={(value) => setCollapsed(value)}>
          <MenuOutlined />
        </Menu.Item>

        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/" />
          <span>About Us</span>
        </Menu.Item>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/" />
          <span>Contact</span>
        </Menu.Item>

        <SubMenu key="sub1" title="Tea Menu" icon={<AppstoreOutlined />}>
          <SubMenu key="innersub1" title="Black Tea" icon={<FileOutlined />}>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>Japan</span>
              </Menu.Item>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>China</span>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="innersub23" title="Green Tea" icon={<FileOutlined />}>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>Japan</span>
              </Menu.Item>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>China</span>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="innersub3" title="Fruit Tea" icon={<FileOutlined />}>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>Japan</span>
              </Menu.Item>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/" />
                <span>China</span>
              </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SideBar;