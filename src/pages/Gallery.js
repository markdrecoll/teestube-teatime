import Menu from '../components/Menu';
import ImageGallery from 'react-image-gallery';
// import "~react-image-gallery/styles/css/image-gallery.css";
import "../styles/image-gallery.scss"

const images = [
  {
    original: process.env.PUBLIC_URL + "/assets/images/banner1.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/banner1.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/banner2.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/banner2.jpg",
  },
];

const Gallery = () => {
    return (
      <div>
        <Menu />
        <h1>Gallery</h1>
        <ImageGallery items={images} />
      </div>
    );
  };
    
export default Gallery;