import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Menu from '../components/Menu';
import MapDisplay from '../components/MapDisplay';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Menu />
      <div className="row justify-content-md-center m-4">
        <div className="col-lg-4 col-md-6 col-12">
          <Card style={{ height: '32rem' }}>
            <Card.Body>
              <Card.Title>Teestube</Card.Title>
              <Card.Text>
                <p className="m-0">INH.: Dr. Zahra Hezarkhani</p>
                <p className="m-0">Email: z.hezarkhani@t-online.de</p>
                <p className="m-0">Adresse: Christofsstr. 11,AM Karmeliterplatz 55116 Mainz</p>
                <p className="m-0">Phone/Fax: 06131-223604</p>
              </Card.Text>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={3}>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("Monday")}</td>
                    <td>10:00 AM</td>
                    <td>6:30 PM</td>
                  </tr>
                  <tr>
                    <td>{t("Tuesday")}</td>
                    <td>10:00 AM</td>
                    <td>6:30 PM</td>
                  </tr>
                  <tr>
                    <td>{t("Wednesday")}</td>
                    <td>1:00 PM</td>
                    <td>6:30 PM</td>
                  </tr>
                  <tr>
                    <td>{t("Thursday")}</td>
                    <td>10:00 AM</td>
                    <td>6:30 PM</td>
                  </tr>
                  <tr>
                    <td>{t("Friday")}</td>
                    <td>10:00 AM</td>
                    <td>6:30 PM</td>
                  </tr>
                  <tr>
                    <td>{t("Saturday")}</td>
                    <td>10:00 AM</td>
                    <td>4:00 PM</td>
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
        <div className="col-lg-4 col-md-6 col-12">
          <Card style={{ height: '32rem' }}>
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