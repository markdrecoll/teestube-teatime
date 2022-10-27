import React, { useState, useRef } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { t } from "i18next";

import { Breadcrumb, Layout, Menu } from 'antd';


import SideBar from '../../components/SideBar';
import blackTeaData from '../../teaData/blackTeaData';

const { Header, Content, Footer, Sider } = Layout;

const BlackTea = () => {

    const [searchState, setSearchState] = useState({ searchText: '', searchedColumn: '' })
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchState({ searchText: '' });
        confirm();
    };

    // adapted from antd table search, as well as stack overflow showing how to convert to functional https://stackoverflow.com/questions/69356379/how-to-do-column-level-search-in-ant-design-using-function-component
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={t("Search") + " Name"}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 100 }}
                    >
                        {t("Search")}
                    </Button>
                    <Button onClick={() => handleReset(clearFilters, confirm)} size="small" style={{ width: 100 }}>
                        {t("Reset")}
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput && searchInput.current && searchInput.current.select());
            }
        },
        render: text =>
            searchState.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchState.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });    

    const columns = [
        {
            title: 'Tea Type',
            dataIndex: 'type',
            key: 'type',
            filters: [
                {
                    text: 'Indien Assam',
                    value: 'Indien Assam'
                },
                {
                    text: 'Indien Darjeeling',
                    value: 'Indien Darjeeling'
                },
                {
                    text: 'Indien Himalaya',
                    value: 'Indien Himalaya'
                },
                {
                    text: 'Ceylon',
                    value: 'Ceylon'
                },
                {
                    text: 'Verschiedene Länder',
                    value: 'Verschiedene Länder'
                },
                {
                    text: 'Afrika',
                    value: 'Afrika'
                },
                {
                    text: 'Russland',
                    value: 'Russland'
                },
                {
                    text: 'England (Hauptbestandteil: Ceylon)',
                    value: 'England (Hauptbestandteil: Ceylon)'
                },
                {
                    text: 'Ostfriesland (enthält zu 90% Assam-Tee)',
                    value: 'Ostfriesland (enthält zu 90% Assam-Tee)'
                },
                {
                    text: 'Infree Tee',
                    value: 'Infree Tee'
                },
                {
                    text: 'China Schwarz-Tee',
                    value: 'China Schwarz-Tee'
                }
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
        },
        {
            title: 'Tea Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: t('50 Grams'),
            dataIndex: 'price_50g',
            key: 'price_50g',
            sorter: (a, b) => a.price_50g - b.price_50g,
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        },
        {
            title: t('100 Grams'),
            dataIndex: 'price_100g',
            key: 'price_100g',
            sorter: (a, b) => a.price_100g - b.price_100g,
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        },
        {
            title: t('250 Grams'),
            dataIndex: 'price_250g',
            key: 'price_250g',
            sorter: (a, b) => a.price_250g - b.price_250g,
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        }
    ]
    
    return (
        <div>
            <Layout style={{
        minHeight: '100vh',
      }}>
            <SideBar />
            <div className="col-lg-8 col-md-10 offset-lg-2 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">
                <Table
                dataSource={blackTeaData}
                columns={columns}
                rowKey={blackTeaData.key}
                pagination={{ pageSize: 10 }}
                size="small"
                bordered="true"
                scroll={{ x: 400 }}
                />
            </div>
            </Layout>
        </div>
    );
};

export default BlackTea;