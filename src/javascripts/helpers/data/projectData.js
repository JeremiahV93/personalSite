const projects = [
  {
    title: 'Nutshell Moose: Le Baguette',
    screenshot: 'https://i.imgur.com/bo1miTk.jpeg',
    description: `This was our first group project using Webpack and Axios calls for CRUD capbabilities.
     We were tasked with creating a taskboard for a resturant to track staff, menu items, ingrediants and seating. We divided the tasks based on the different areas, each of us being able to focus on
     on the CRUD of each collection. I focused on the staff collection and am most proud of the dropdown menues for editing and adding staff. This is difficult with propagation but was able
     to provide a product that we were all very proud off.`,
    technologiesUsed: 'HTML, SCSS, Vanilla JavaScript, Version Control with Github, Axios, Firebase, Jquery, Bootstrap',
    available: true,
    url: 'https://nutshell-moose.web.app/',
    githubUrl: 'https://github.com/JeremiahV93/nutshell-moose',
  },
  {
    title: 'Nutshell Reindeer: Jurrasic World ',
    screenshot: 'https://i.imgur.com/9BKbXQH.jpg',
    description: `This was the follow up to Nutshell Moose, this was originally a single page app that was created by another group of student in our class. 
    They got our project and we got their's and had a new list of requirements to hit MVP. This was a huge undertaking as it was the first time we were not only exposed to another group
     of developer's code, but also expected to work with it. Our first challenge was to understand the structure and method of the first team's development strategies.
     We approached it tackling one collectino of items and reorganizing it in a way that made sense to the team. We were then able to take that same strategy and apply it to the rest of the project.`,
    technologiesUsed: 'HTML, SCSS, Vanilla JavaScript, Version Control with Github, Axios, Firebase, Jquery, Bootstrap',
    available: true,
    url: 'https://nutshell-riendeer.web.app/',
    githubUrl: 'https://github.com/JeremiahV93/nutshell-reindeer',
  },
  {
    title: 'Sports Roster',
    screenshot: 'https://i.imgur.com/qcGVGxp.jpeg',
    description: `This is my first React project that utilizes class components with the React framework. I am still utilizing Firebase for my API and have full CRUD.
     I created varying data objects (pitchers, and fielders) that required some tooling for both displaying the players and any added player or updating those 
      players as well. This website I also took the challenge to use SCSS to create the player cards to look like traditonal Baseball cards, with flipping cards for
      the player stats.`,
    available: true,
    url: 'https://jv-sports-roster.web.app/',
    githubUrl: 'https://github.com/JeremiahV93/sports-roster',
  },
];

const getProjectData = () => projects;

export default { getProjectData };
