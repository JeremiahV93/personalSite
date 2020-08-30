import 'bootstrap';
import '../main.scss';
import navbar from './components/navbar/navbar';
import clickEvents from './helpers/clickEvents';
import aboutMe from './components/aboutMe/aboutMe';

const init = () => {
  clickEvents.clickEvents();
  navbar.navbar();
  aboutMe.aboutMe();
};

init();
