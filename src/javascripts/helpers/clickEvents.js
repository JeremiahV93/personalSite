// import projects from '../components/projects/projects';

import projects from '../components/projects/projects';
import aboutMe from '../components/aboutMe/aboutMe';

const clickEvents = () => {
  $('body').on('click', '#projects-link', projects.printProjects);
  $('body').on('click', '#aboutMe', aboutMe.aboutMe);
};

export default { clickEvents };
