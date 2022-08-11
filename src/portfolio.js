const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://salemiana.github.io/reactfolio',
    title: 'SZ',
  }
  
  const about = {
    name: 'Salem Zerezghi',
    role: 'Full Stack Developer',
    description:
      'A passionate about creating apps and simplifying technnology for users.',
    resume: 'https://example.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/salem-zerezghi-136a2416a/',
      github: 'https://github.com/Salemiana',
    },
  }
  
  const projects = [
   
    {
      name: 'Tech-blog',
      description:
        'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      stack: ['JavaScript', 'CSS', 'MySQL'],
      sourceCode: 'https://github.com/salemiana/tech_blog',
      liveDeploy: 'https://blooming-everglades-30856.herokuapp.com/',
    },
    {
      name: 'Musitory',
      description:
        'A music app that lets user choose any song by artist name',
      stack: ['HTML', 'JavaScript', 'CSS'],
      sourceCode: 'https://github.com/salemiana/Musitory',
      livePreview: 'https://github.com',
    },
    {
      name: 'Cineview',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['MongoDb', 'Express', 'Node', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MERN',
  ]
  
  const contact = {
    email: 'salem.zerezghi2@gmail.com',
  }
  
  export { header, about, projects, skills, contact }