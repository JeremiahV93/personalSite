import utils from '../../helpers/utils';

const aboutMe = () => {
  const domString = `
  <div class='aboutMe'>
    <h1> About me: </h1>
      <p> I am Jeremiah Vasquez and I am a Full-stack Web Developer that is exciting to join a promising and driven field. I have always been involved with technology
      which led me to joining Nashville Software School as the Student Services Admin. Being around developers got me wondering and I took some basic Javascript Courses
      and was instandly sold. I wanted, no needed, to learn more and finally signed up for their Full-stack Web Development Bootcamp. It has been a perfect blend of my passion for creativity, 
      adn funneling that passion and drive into productive problem solving. My personal hoobies reflect this, with a high drive to succeed and learn new things. </p>
    <h2> Tech: </h2>
    <p> git hub, js, css, html, scss, jquery, boostrap, react</p>
  </div>
  `;
  utils.printToDom('#content', domString);
};

export default { aboutMe };
