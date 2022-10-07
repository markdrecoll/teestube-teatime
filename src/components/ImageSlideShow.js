import Carousel from 'react-bootstrap/Carousel';

function ImageSlideShow() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/banner1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sample Text</h3>
          <p>You could have additional sample text here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/banner2.jpg"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sample Text</h3>
          <p>You could have additional sample text here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlideShow;