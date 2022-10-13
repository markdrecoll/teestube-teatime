import { t } from "i18next";
import React, { useState, useEffect, useRef } from "react";
import Menu from '../../components/Menu';

import { Table, Input, Button, Space, Row, Col } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import blackTeaData from '../../teaData/blackTeaData'


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

    const handleReset = clearFilters => {
        clearFilters();
        setSearchState({ searchText: '' });
    };

    // adapted from antd table search, as well as stack overflow showing how to convert to functional https://stackoverflow.com/questions/69356379/how-to-do-column-level-search-in-ant-design-using-function-component
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
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
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
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
                }
            ],
            // onFilter: (value, record) => record.name.indexOf(value) === 0,
            onFilter: (value, record) => record.name.includes(value),
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
            title: '50 Grams',
            dataIndex: 'price_50g',
            key: 'price_50g',
            sorter: (a, b) => a.price_50g - b.price_50g
            //   width: "100px",
        },
        {
            title: '100 Grams',
            dataIndex: 'price_100g',
            key: 'price_100g',
            sorter: (a, b) => a.price_100g - b.price_100g
        },
        {
            title: '250 Grams',
            dataIndex: 'price_250g',
            key: 'price_250g',
            sorter: (a, b) => a.price_250g - b.price_250g
        }
    ]
    return (
        <div>
            <Menu />
            {/* <h1>{t("Language")}test</h1> */}
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-12">

            <Table dataSource={blackTeaData} columns={columns} rowKey={blackTeaData.key} pagination={{ pageSize: 20 }} size="small" bordered="true" />

            {/* missing items from black tea */}
            {/* Darjeeling-Teeaktion, Schadstoffkontrolliert 500 gr 22,00 */}
            </div>
        </div>
    );
};

export default BlackTea;