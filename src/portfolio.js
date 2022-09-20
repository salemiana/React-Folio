const header = {
  homepage: "https://salemiana.github.io/reactfolio",
  title: "Home",
  
};

const about = {
  name: "Salem Zerezghi",
  role: "Full Stack Developer",
  description:
    "Recently certified full stack developer with passion for developing scalable web applications, equipped with skills needed to create products that bring joy to the lives of users.", 
  
  
  resume: "https://docs.google.com/document/d/1VFq-ywH_jWtQfO289ol2lQOhrH4TA13ubZ4Px2Jb2Xo",
  links: {
    linkedin: "https://www.linkedin.com/in/salem-zerezghi/",
    github: "https://github.com/Salemiana",
  },
};

const projects = [
  {
    name: "Coder-Quizzy",
    description:
      "A timed coding quiz app with multiple-choice questions that will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code.",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/salemiana/coder-quizzy",
    // liveDeploy: "https://blooming-everglades-30856.herokuapp.com/",
  },
  {
    name: "Musitory",
    description: "A music app that lets user choose any song by artist name",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/salemiana/Musitory",
    // liveDeploy: "https://github.com",
  },
   {
    name: "Cineview",
    description:
      " A movie App  to let users search for their favorite movies, actors, and Tv information built using MERN",
    stack: ["MongoDb", "Express", "Node", "React"],
    sourceCode: "https://github.com/salemiana/cineview",
    // liveDeploy: "https://pure-forest-35565.herokuapp.com",
  },
  {
    name: "Note Taker",
    description:
      "An application that can be used to write and save notes and it uses an Express.js back end and will save/retrieve note data from a JSON file.",
    stack: ["Express", "Node"],
    sourceCode: "https://github.com/salemiana/Express-Note-Taker",
    // liveDeploy: "https://arcane-everglades-97054.herokuapp.com/",
  },
  {
    name: "Budget Trucker",
    description:
      "Adding functionality to an existing budget tracker application to allow for offline access and functionality.",
    stack: ["Express", "MOngoDB", "Mongoose"],
    sourceCode: "https://github.com/salemiana/PWA_Budget_Trucker",
    // liveDeploy: "https://salty-woodland-13605.herokuapp.com/",
  },
  {
    name: "Tech blog",
    description:
      "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    stack: ["Express", "Sequelize", "MySQL"],
    sourceCode: "https://github.com/salemiana/tech_blog",
    // liveDeploy: "https://blooming-everglades-30856.herokuapp.com/",
  },

];

const skills = ["HTML", "CSS", "Git", "JavaScript", "API", "OOP", "Node", "Express", "React", "SQL", "PWA", "NoSQL", "MongoDB" ];

const contact = {
  email: "salem.zerezghi2@gmail.com",
};

export { header, about, projects, skills, contact };
