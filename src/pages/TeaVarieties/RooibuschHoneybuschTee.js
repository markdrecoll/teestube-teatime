import { Table } from "antd";
import { t } from "i18next";

import Menu from '../../components/Menu';
import RooibuschHoneybuschData from '../../teaData/RooibuschHoneybuschJsonData';

const RooibuschHoneybuschTee = () => {

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
    ];
    
    return (
        <div>
            <Menu />
            <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1 col-12 shadow p-3 mb-5 mt-4 bg-white rounded">

                <div className="text-center mb-3">
                    <h3>Rooibuschtee(Massaitee) & Honeybusch Südafrika Teeinfre</h3>
                </div>

                <Table
                dataSource={RooibuschHoneybuschData? RooibuschHoneybuschData : ""}
                columns={columns}
                rowKey={RooibuschHoneybuschData? RooibuschHoneybuschData.key : ""}
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

export default RooibuschHoneybuschTee;