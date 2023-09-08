import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

function ImageSlideShow() {

  const { t } = useTranslation();

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/facebook_photos/teestube_facebook_photos(3).jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h2 className="color-white">
            Liebe Kunden, 
            aufgrund von Renovierungsarbeiten schließt das Geschäft zum 31.07.2023.
            Wir sind ab dem 15.09.2023 wieder für Sie da.
            Vielen Dank für Ihr Verständnis.
            Ihre Teestube Teatime
          </h2> */}
          <h2 className="color-white">Willkommen in der Mainz<br />Teestube Teatime</h2>
          {/* <p>{t("You could have additional sample text here")}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/facebook_photos/teestube_facebook_photos(1).jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h2 className="color-white">
            Liebe Kunden, 
            aufgrund von Renovierungsarbeiten schließt das Geschäft zum 31.07.2023.
            Wir sind ab dem 15.09.2023 wieder für Sie da.
            Vielen Dank für Ihr Verständnis.
            Ihre Teestube Teatime
          </h2> */}
          <h2 className="color-white">5% Rabatt jeden ersten Montag im Monat</h2>
          {/* <p>{t("You could have additional sample text here")}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/facebook_photos/teestube_facebook_photos(8).jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className="color-white">
            Liebe Kunden, 
            aufgrund von Renovierungsarbeiten schließt das Geschäft zum 31.07.2023.
            Wir sind ab dem 15.09.2023 wieder für Sie da.
            Vielen Dank für Ihr Verständnis.
            Ihre Teestube Teatime
          </h2>
          <h2 className="color-white">Willkommen in der Mainz<br />Teestube Teatime</h2>
          {/* <p>{t("You could have additional sample text here")}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlideShow;