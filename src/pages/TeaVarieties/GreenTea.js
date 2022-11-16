import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Table } from "antd";
import { t } from "i18next";

import Menu from '../../components/Menu';
import greenTeaData from '../../teaData/greenTeaData';

const GreenTea = () => {

  const columns = [
    {
      title: '',
      dataIndex: 'menuNumber',
      key: 'menuNumber',
    },
    {
      title: t('Name'),
      dataIndex: 'name-description',
      key: 'name',
      render: (text, record) => (
        <span><b>{record.name}</b><br />{record.description}</span>
      )
    },
    {
      title: t('50 Grams'),
      dataIndex: 'price_50g',
      key: 'price_50g',
      // sorter: (a, b) => a.price_50g - b.price_50g,
      render: translatedCost => translatedCost ? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : '',
    },
    {
      title: t('100 Grams'),
      dataIndex: 'price_100g',
      key: 'price_100g',
      // sorter: (a, b) => a.price_100g - b.price_100g,
      render: translatedCost => translatedCost ? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : '',
    },
    {
      title: t('250 Grams'),
      dataIndex: 'price_250g',
      key: 'price_250g',
      // sorter: (a, b) => a.price_250g - b.price_250g,
      render: translatedCost => translatedCost ? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : '',
    }
  ];

  const japanGruntee = greenTeaData.filter(tea => { return tea.type === 'Japan Grüntee' });
  const chinaGruntee = greenTeaData.filter(tea => { return tea.type === 'China Grüntee' });
  const chinaWeißtee = greenTeaData.filter(tea => { return tea.type === 'China weißtee' });
  const taiwan = greenTeaData.filter(tea => { return tea.type === 'Formosa (Taiwan) Grüntee' });
  const oolong = greenTeaData.filter(tea => { return tea.type === 'China Oolong-Tee (schwarzer Drachen, Halb fermentiert)' });
  const verschiedeneLander = greenTeaData.filter(tea => { return tea.type === 'Verschiedene Länder Grüntee (Ronnefeldt)' });

  const [currentTeaType, setCurrentTeaType] = useState(japanGruntee);

  const handleClick = (teaType) => {
    setCurrentTeaType(teaType);
  };

  return (
    <div>
      <Menu />
      <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">

        <div className="text-center mb-3">
          <h3>GrünTee</h3>
        </div>

        <div className="text-center mb-3">
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(japanGruntee)}>Japan Grüntee</Button>
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(chinaGruntee)}>China Grüntee</Button>
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(chinaWeißtee)}>China weißtee</Button>
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(taiwan)}>Formosa (Taiwan) Grüntee</Button>
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(oolong)}>China Oolong-Tee (schwarzer Drachen, Halb fermentiert)</Button>
          <Button className="m-1" variant="success" size={"sm"} onClick={() => handleClick(verschiedeneLander)}>Verschiedene Länder Grüntee (Ronnefeldt)</Button>
        </div>

        <Table
          dataSource={currentTeaType ? currentTeaType : ""}
          columns={columns}
          rowKey={currentTeaType ? currentTeaType.key : ""}
          pagination={false}
          size="small"
          bordered="true"
          scroll={{ x: 400 }}
        />
      </div>
    </div>
  );
};

export default GreenTea;