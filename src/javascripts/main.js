import 'bootstrap';
import '../main.scss';
import navbar from './components/navbar/navbar';
import clickEvents from './helpers/clickEvents';
import aboutMe from './components/aboutMe/aboutMe';
import footer from './components/footer/footer';

const init = () => {
  clickEvents.clickEvents();
  navbar.navbar();
  aboutMe.aboutMe();
  footer.footer();
};

init();
