import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

// const projectCards = (project) => {
//   const domString = `
//     print each project cards. etc ${project.name}
//   `;
//   return domString;
// };

const printProjects = () => {
  let domString = '<div>';
  projectData.getProjectData().forEach((project) => {
    domString += `
    <p>${project.title}</p>`;
  });

  domString += '</div>';

  utils.printToDom('#content', domString);
};

export default { printProjects };
