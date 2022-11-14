import { Table } from "antd";
import { t } from "i18next";

import Menu from '../../components/Menu';
import aromaticGreenTeaData from '../../teaData/aromaticGreenTeaData';

const AromaticGreenTea = () => {

    // Columns of the table
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
        //     title: t('Description'),
        //     dataIndex: 'description',
        //     key: 'description'
        // },
        {
            title: t('50 Grams'),
            dataIndex: 'price_50g',
            key: 'price_50g',
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        },
        {
            title: t('100 Grams'),
            dataIndex: 'price_100g',
            key: 'price_100g',
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        },
        {
            title: t('250 Grams'),
            dataIndex: 'price_250g',
            key: 'price_250g',
            render: translatedCost => translatedCost? (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(translatedCost)) : ''
        }
    ]
    
    return (
        <div>
            <Menu />
            <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">

                <div className="text-center mb-3">
                    <h3>Aromatisierter Grüntee</h3>
                </div>

                <Table
                dataSource={aromaticGreenTeaData? aromaticGreenTeaData : ""}
                columns={columns}
                rowKey={aromaticGreenTeaData? aromaticGreenTeaData.key : ""}
                pagination={{ pageSize: 12 }}
                // pagination={false}
                size="small"
                bordered="true"
                scroll={{ x: 400 }}
                />
            </div>
        </div>
    );
};

export default AromaticGreenTea;