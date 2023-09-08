import { useTranslation } from 'react-i18next';

import Menu from '../components/Menu';
import ImageSlideShow from '../components/ImageSlideShow';

const Home = () => {

  const { t, i18n } = useTranslation();

    return (
      <div>
        <Menu />
        <ImageSlideShow />
        {/* <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/images/under_construction.jpg"}
          alt="Under Construction"
        /> */}
      </div>
    );
  };
    
  export default Home;