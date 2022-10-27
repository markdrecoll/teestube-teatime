import { useTranslation } from 'react-i18next';

// import Menu from '../components/Menu';
import SideBar from '../components/SideBar';
import ImageSlideShow from '../components/ImageSlideShow';

import { withTranslation } from "react-i18next"
import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;

const Home = () => {

  const { t, i18n } = useTranslation();

    return (
      <div>
        {/* <Menu /> */}
        <Layout style={{
        minHeight: '100vh',
      }}>
        <SideBar />
        <ImageSlideShow />
        </Layout>
      </div>
    );
  };
    
  export default Home;