import { useTranslation } from 'react-i18next';

import Menu from '../components/Menu';
import ImageSlideShow from '../components/ImageSlideShow';

const Home = () => {

  const { t, i18n } = useTranslation();

    return (
      <div>
        <Menu />
        <ImageSlideShow />
      </div>
    );
  };
    
  export default Home;