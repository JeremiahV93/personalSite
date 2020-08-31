import utils from '../../helpers/utils';

const footer = () => {
  const domString = `
  <nav class="navbar footer navbar-expand-lg navbar-light bg-light">
    <div id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="mailto:jeremiah.vasquez93@gmail.com">Email Me<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item"> 
          <a class="nav-link" href="https://github.com/JeremiahV93">Github Profile</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  utils.printToDom('#footer', domString);
};

export default { footer };
