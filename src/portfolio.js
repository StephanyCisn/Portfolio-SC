const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://stephanycisn.github.io/',
  title: 'SC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Stephany Cisneros',
  role: 'Full Stack Developer',
  description:
    `I'm a very ambitious full-stack developer looking for an entry level role with the opportunity to work with the latesttechnologies on challenging and diverse projects.`,
  resume: 'file:///Users/stephanycisneros/Downloads/Resume+(3).html',
  social: {
    linkedin: 'https://www.linkedin.com/in/stephany-cisneros/',
    github: 'https://github.com/StephanyCisn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pomodoro Timer',
    description:
      'The functionality is the same as a real Pomodoro timer, but you can increase the focus or break durations.',
    stack: ['Javascript','React', 'React Hooks', 'CSS'],
    sourceCode: 'https://github.com/StephanyCisn/Pomodoro',
    livePreview: 'https://pomodoro-ochre.vercel.app',
  },
  {
    name: 'Restaurant Reservation',
    description:
      'Full Stack application used for creating and managing tables and reservations for a hypothetical restaurant.',
    stack: ['PostgreSQL', 'Express', 'React', 'Node.js'],
    sourceCode: 'https://github.com/StephanyCisn/starter-restaurant-reservation',
    livePreview: 'https://final-cap-frontend.vercel.app/dashboard',
  },
  {
    name: 'Grubdash',
    description:
      'Built an API - defining routes, URL’s and middleware to perform CRUD operations on dishes and orders resources',
    stack: ['Express', 'Javascript'],
    sourceCode: 'https://github.com/StephanyCisn/Grubdash-backend',
    livePreview: 'https://grubdash-backend-project.herokuapp.com/',
  },
]

const skills = [
 
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'React',
  'Gthub',
  'Restful APIs',
  'Heroku',
  'Vercel',
  'Jira',
  'NPM',
  'PostgreSQL',
  'Knex.js',
  'Express',
]

const contact = {

  email: 'cisneros.stephany91@gmail.com',
}

export { header, about, projects, skills, contact }
