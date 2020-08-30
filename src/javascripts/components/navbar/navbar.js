import utils from '../../helpers/utils';

const navbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Jeremiah's personal website</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">About Me <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" id='projects-link'>
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  utils.printToDom('#navBar', domString);
};

export default { navbar };
