const header = {
  homepage: "https://salemiana.github.io/reactfolio",
  title: "Home",
  
};

const about = {
  name: "Salem Zerezghi",
  role: "Full Stack Developer",
  description:
    "Recently certified full stack developer with passion for developing scalable web applications, and ready to contribute and grow my skills through creating apps and simplifying technnology for users.", 
  
  
  resume: "https://example.com",
  links: {
    linkedin: "https://www.linkedin.com/in/salem-zerezghi-136a2416a/",
    github: "https://github.com/Salemiana",
  },
};

const projects = [
  {
    name: "Tech-blog",
    description:
      "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.",
    stack: ["JavaScript", "CSS", "MySQL"],
    sourceCode: "https://github.com/salemiana/tech_blog",
    liveDeploy: "https://blooming-everglades-30856.herokuapp.com/",
  },
  {
    name: "Musitory",
    description: "A music app that lets user choose any song by artist name",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/salemiana/Musitory",
    liveDeploy: "https://github.com",
  },
  {
    name: "Cineview",
    description:
      " A movie App  to let users search for their favorite movies, actors, and Tv information built using MERN",
    stack: ["MongoDb", "Express", "Node", "React"],
    sourceCode: "https://github.com/salemiana/cineview",
    liveDeploy: "https://pure-forest-35565.herokuapp.com",
  },
  {
    name: "Note Taker",
    description:
      "An application that can be used to write and save notes and it uses an Express.js back end and will save/retrieve note data from a JSON file.",
    stack: ["Express", "Node"],
    sourceCode: "https://github.com/salemiana/Express-Note-Taker",
    liveDeploy: "https://arcane-everglades-97054.herokuapp.com/",
  },
  {
    name: "Budget Trucker",
    description:
      "Adding functionality to an existing budget tracker application to allow for offline access and functionality.",
    stack: ["Express", "MOngoDB", "Mongoose"],
    sourceCode: "https://github.com/salemiana/PWA_Budget_Trucker",
    liveDeploy: "https://salty-woodland-13605.herokuapp.com/",
  },
  {
    name: "Tech blog",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Express", "Sequelize", "MySQL"],
    sourceCode: "https://github.com/salemiana/tech_blog",
    liveDeploy: "https://blooming-everglades-30856.herokuapp.com/",
  },

];

const skills = ["HTML", "CSS", "JavaScript", "React", "MERN", "MySql", "NoSQL", "Mongoose" ];

const contact = {
  email: "salem.zerezghi2@gmail.com",
};

export { header, about, projects, skills, contact };
