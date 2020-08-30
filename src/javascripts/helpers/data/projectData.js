const projects = [
  {
    title: 'Nutshell Moose: Le Baguette',
    screenshot: '',
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
    screenshot: '',
    description: `This was the follow up to Nutshell Moose, this was originally a single page app that was created by another group of student in our class. 
    They got our project and we got their's and had a new list of requirements to hit MVP. This was a huge undertaking as it was the first time we were not only exposed to another group
     of developer's code, but also expected to work with it. Our first challenge was to understand the structure and method of the first team's development strategies.
     We approached it tackling one collectino of items and reorganizing it in a way that made sense to the team. We were then able to take that same strategy and apply it to the rest of the project.`,
    technologiesUsed: 'HTML, SCSS, Vanilla JavaScript, Version Control with Github, Axios, Firebase, Jquery, Bootstrap',
    available: true,
    url: 'https://nutshell-riendeer.web.app/',
    githubUrl: 'https://github.com/JeremiahV93/nutshell-reindeer',
  },
];

const getProjectData = () => projects;

export default { getProjectData };
