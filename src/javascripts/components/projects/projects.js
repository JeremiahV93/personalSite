import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';
import './projects.scss';
// const projectCards = (project) => {
//   const domString = `
//     print each project cards. etc ${project.name}
//   `;
//   return domString;
// };

const printProjects = () => {
  let domString = '<div>';
  projectData.getProjectData().forEach((project) => {
    if (project.available) {
      domString += `
      <div class="card" >
        <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Project Title: ${project.title}</h5>
          <p class="card-text">Description: ${project.description}</p>
          <a href="${project.githubUrl}" class="btn btn-primary">Github Link</a>
          <a href="${project.url}" class="btn btn-primary">Deployed Website Link</a>

          </div>
      </div>`;
    }
  });

  domString += '</div>';

  utils.printToDom('#content', domString);
};

export default { printProjects };
