import { t } from "i18next";
import React, { useState, useRef } from "react";
import Menu from '../../components/Menu';

import { Table, Input, Button, Space, Row, Col } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
// import  from '../../teaData/'

const GreenTea = () => {
    return (
      <div>
        <Menu />
          <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">
                <Table
                // dataSource={}
                // columns={columns}
                // rowKey={}
                pagination={{ pageSize: 10 }}
                size="small"
                bordered="true"
                />
            </div>
      </div>
    );
  };
    
  export default GreenTea;