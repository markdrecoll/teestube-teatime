import Menu from '../components/Menu';
import ImageGallery from 'react-image-gallery';
// import "~react-image-gallery/styles/css/image-gallery.css";
import "../styles/image-gallery.scss"

const images = [
  {
    original: process.env.PUBLIC_URL + "/assets/images/gallery/img_5779.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/gallery/img_5779.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/gallery/img_5781.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/gallery/img_5781.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/gallery/img_5786.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/gallery/img_5786.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/gallery/img_5795.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/gallery/img_5795.jpg",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/gallery/img_5800.jpg",
    thumbnail: process.env.PUBLIC_URL + "/assets/images/gallery/img_5800.jpg",
  },
];

const Gallery = () => {
    return (
      <div>
        <Menu />
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
      </div>
    );
  };
    
export default Gallery;