import { t } from 'i18next';
import Menu from '../components/Menu';

const About = () => {
    return (
      <div>
        <Menu />
        <h1>{t("About Us")}</h1>
        <h2>Tee-Freunde,</h2>
        <p>Herzlich willkommen auf den Seiten des altesten Tee-Fac</p>
      </div>
    );
  };
    
  export default About;