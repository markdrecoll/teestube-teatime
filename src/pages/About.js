import { t } from 'i18next';
import Menu from '../components/Menu';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
      <div>
        <Menu />
        <div className="col-lg-8 col-md-8 col-12 offset-lg-2 offset-md-2">
          <div className="m-4">
          <Card style={{ height: 'auto' }}>
            <Card.Body>
              <h2 className="about_us_text-h">{t("About Us")}</h2>
              <h4 className="about_us_text-h">Tee-Freunde,</h4>
              <p className="about_us_text-p">
                Herzlich willkomen auf den Seiten des ältesten Tee-Fachgeschäftes in Mainz.
                Die Teestube Teatime wurde im jahr 1981 an einem historisch bedeutsamen Platz (Karmeliterplatz) eröffnet.
                Durch unsere langjährige Erfahrung finden Sie bei uns eine umfangreiche Teeauswahl aus allen bekannten
                anbaugebieten der Welt. Sie erleben die Viefalt des Tees in all ihren Facetten. Alle unsere Teesorten
                sind durch unsere Liebferanten rückstandskontrolliert.
              </p>
              <p className="about_us_text-p">
                Neben unserer Teeauswahl führen wir ein reichhaltiges und stilvolles Angebot an Teegeschirr,
                Teezubehör und Confiserie.
              </p>
              <p className="about_us_text-p">
                Da man allzu oft an Zeitgrenzen stößt, freuen wir uns über Ihre telefonische-Bestellung unter
                06131-223604 und/oder schreiben Sie uns eine E-Mail an z.hezarkhani@t-online.de.
              </p>
              <p className="about_us_text-p">
                Wenn Sie "Tee-Einsteiger" sind oder sich mit der Welt des Tees gezielt auseinander setzen möchten,
                können Sie an unseren Tee-Seminaren, die von einem erfahrenen Tee-Sommelier gelietet werden, teilnehmen.
              </p>
              <p className="about_us_text-p">
                Besuchen Sie uns! In unserer Teestube bereiten wir Ihnen gerne alle Teesorten aus unserem Sortiment frisch für Sie zu.
              </p>
              <p className="about_us_text-p">
                Inh.: Dr. Zahra Hezarkhani
              </p>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    );
  };
    
  export default About;