import Menu from '../components/Menu';
import ImageGallery from 'react-image-gallery';
import "../styles/image-gallery.scss"

const images = [
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(1).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(1).jpg",
    originalAlt: "Tea Shop Image 1",
    thumbnailAlt: "Tea Thumbnail Image 1",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(2).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(2).jpg",
    originalAlt: "Tea Shop Image 2",
    thumbnailAlt: "Tea Thumbnail Image 2",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(3).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(3).jpg",
    originalAlt: "Tea Shop Image 3",
    thumbnailAlt: "Tea Thumbnail Image 3",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(4).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(4).jpg",
    originalAlt: "Tea Shop Image 4",
    thumbnailAlt: "Tea Thumbnail Image 4",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(5).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(5).jpg",
    originalAlt: "Tea Shop Image 5",
    thumbnailAlt: "Tea Thumbnail Image 5",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(6).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(6).jpg",
    originalAlt: "Tea Shop Image 6",
    thumbnailAlt: "Tea Thumbnail Image 6",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(7).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(7).jpg",
    originalAlt: "Tea Shop Image 7",
    thumbnailAlt: "Tea Thumbnail Image 7",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(8).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(8).jpg",
    originalAlt: "Tea Shop Image 8",
    thumbnailAlt: "Tea Thumbnail Image 8",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(9).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(9).jpg",
    originalAlt: "Tea Shop Image 9",
    thumbnailAlt: "Tea Thumbnail Image 9",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(10).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(10).jpg",
    originalAlt: "Tea Shop Image 10",
    thumbnailAlt: "Tea Thumbnail Image 10",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(11).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(11).jpg",
    originalAlt: "Tea Shop Image 11",
    thumbnailAlt: "Tea Thumbnail Image 11",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(12).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(12).jpg",
    originalAlt: "Tea Shop Image 12",
    thumbnailAlt: "Tea Thumbnail Image 12",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(13).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(13).jpg",
    originalAlt: "Tea Shop Image 13",
    thumbnailAlt: "Tea Thumbnail Image 13",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(14).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(14).jpg",
    originalAlt: "Tea Shop Image 14",
    thumbnailAlt: "Tea Thumbnail Image 14",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(15).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(15).jpg",
    originalAlt: "Tea Shop Image 15",
    thumbnailAlt: "Tea Thumbnail Image 15",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(16).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(16).jpg",
    originalAlt: "Tea Shop Image 16",
    thumbnailAlt: "Tea Thumbnail Image 16",
  },
  {
    original: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(17).jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/facebook_photos/teestube_facebook_photos(17).jpg",
    originalAlt: "Tea Shop Image 17",
    thumbnailAlt: "Tea Thumbnail Image 17",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gallery/img_5779.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gallery/img_5779.jpg",
    originalAlt: "Tea Shop Image 18",
    thumbnailAlt: "Tea Thumbnail Image 18",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gallery/img_5781.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gallery/img_5781.jpg",
    originalAlt: "Tea Shop Image 19",
    thumbnailAlt: "Tea Thumbnail Image 19",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gallery/img_5786.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gallery/img_5786.jpg",
    originalAlt: "Tea Shop Image 20",
    thumbnailAlt: "Tea Thumbnail Image 20",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gallery/img_5795.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gallery/img_5795.jpg",
    originalAlt: "Tea Shop Image 21",
    thumbnailAlt: "Tea Thumbnail Image 21",
  },
  {
    original: process.env.PUBLIC_URL + "/images/gallery/img_5800.jpg",
    thumbnail: process.env.PUBLIC_URL + "/images/gallery/img_5800.jpg",
    originalAlt: "Tea Shop Image 22",
    thumbnailAlt: "Tea Thumbnail Image 22",
  }
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