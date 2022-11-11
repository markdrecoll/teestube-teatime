import React, { useState, useRef } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { t } from "i18next";

import Menu from '../../components/Menu';
import fruitTeaData from '../../teaData/fruitTeaData';

const FruitTea = () => {

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
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description'
        // },
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
            <Menu />
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">
              
                <div className="text-center mb-3">
                    <h2>Früchte-Tee</h2>
                </div>

                <Table
                dataSource={fruitTeaData}
                columns={columns}
                rowKey={fruitTeaData.key}
                pagination={{ pageSize: 10 }}
                size="small"
                bordered="true"
                scroll={{ x: 400 }}
                />
            </div>
        </div>
    );
};

export default FruitTea;