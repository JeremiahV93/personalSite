import utils from '../../helpers/utils';

const aboutMe = () => {
  const domString = `
  <div>
    <h1> About me: </h1>
      <p> Welcome to the about me section?</p>
    <h2> Tech: </h2>
    <p> git hub, js, css, html, scss, jquery, boostrap, react</p>
  </div>
  `;
  utils.printToDom('#content', domString);
};

export default { aboutMe };
