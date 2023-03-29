import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Menu from '../components/Menu';
import MapDisplay from '../components/MapDisplay';

const Contact = () => {

  const { t } = useTranslation();

  let messageFlag = false;
  let messageMargin = 0;

  const storeHoursMessageDate = new Date('2023-04-13');
  const todayDate = new Date();
  messageFlag = (storeHoursMessageDate > todayDate) ? true : false;
  messageMargin = (storeHoursMessageDate > todayDate) ? 0 : 5;

  return (
    <div>
      <Menu />
      <div className="row justify-content-md-center m-4">
        <div className="col-lg-5 col-md-6 col-12">
          <Card style={{ height: '34rem' }}>
            <Card.Body>
              <Card.Title>Teestube</Card.Title>
              <Card.Text>
                <p className="m-0 fw-bold">INH.:</p>
                <p className="m-0">Dr. Zahra Hezarkhani</p>
                <p className="m-0 fw-bold">Email:</p>
                <p className="m-0">z.hezarkhani@t-online.de</p>
                <p className="m-0 fw-bold">{t("Address")}:</p>
                <p className="m-0">Christofsstr. 11,AM Karmeliterplatz 55116 Mainz</p>
                <p className="m-0 fw-bold">{t("Phone")}/Fax:</p>
                <p className={`mt-0 ml-0 mr-0 mb-${messageMargin}`}>{t("companyPhoneNumber")}</p>
                { messageFlag &&
                  <p className="mt-2 fw-bold text-center text-success">Liebe Tee Freunde. Das Geschäft ist von<br />04.04.2023 bis 13.04.2023 geschlossen.</p>
                }
              </Card.Text>
              
              <Table size="sm" className="m-0">
                <thead>
                  <tr>
                    <th colSpan={3}>{t("Hours of Operation")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("Monday")}</td>
                    <td>{t("10:00 AM")}</td>
                    <td>{t("5:00 PM")}</td>
                  </tr>
                  <tr>
                    <td>{t("Tuesday")}</td>
                    <td>{t("10:00 AM")}</td>
                    <td>{t("5:00 PM")}</td>
                  </tr>
                  <tr>
                    <td>{t("Wednesday")}</td>
                    <td colSpan={2}>{t("Closed")}</td>
                  </tr>
                  <tr>
                    <td>{t("Thursday")}</td>
                    <td>{t("10:00 AM")}</td>
                    <td>{t("5:00 PM")}</td>
                  </tr>
                  <tr>
                    <td>{t("Friday")}</td>
                    <td>{t("10:00 AM")}</td>
                    <td>{t("5:00 PM")}</td>
                  </tr>
                  <tr>
                    <td>{t("Saturday")}</td>
                    <td>{t("10:00 AM")}</td>
                    <td>{t("4:00 PM")}</td>
                  </tr>
                  <tr>
                    <td>{t("Sunday")}</td>
                    <td colSpan={2}>{t("Closed")}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-5 col-md-6 col-12">
          <Card style={{ height: '34rem' }}>
            <Card.Body>
              <MapDisplay />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;