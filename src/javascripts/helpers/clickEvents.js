// import projects from '../components/projects/projects';

import projects from '../components/projects/projects';

const clickEvents = () => {
  $('body').on('click', '#projects-link', projects.printProjects);
};

export default { clickEvents };
