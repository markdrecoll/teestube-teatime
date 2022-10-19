import React, { useState, useRef } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { t } from "i18next";

import Menu from '../../components/Menu';
// import blackTeaData from '../../teaData/blackTeaData';

const FruitTea = () => {
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
    
  export default FruitTea;