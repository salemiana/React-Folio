import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from "../../portfolio";

import "./style.css"

const About = () => {
  const { name, role, description, resume, links } = about;

  return (
    <div className="about center jingle">
      {name && (
        <h1>
          Hi, I am <span className="about-name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about-role">A {role}.</h2>}
      <p className="about-desc">{description && description}</p>

      <div className="about-contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {links && (
          <>
            {links.github && (
              <a
                href={links.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {links.linkedin && (
              <a
                href={links.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import coverImage from '../../assets/cover/cover-image.jpg';

// const About = () => {
//   return (

//       <div className="my-2">
//         <p> I am a full stack developer </p>
//         <img
//         src={coverImage}
//         className="my-2"
//         style={{ width: "100%" }}
//         alt="cover"
//       />
//       <p className="content">
//         I am Salem, a full stack developer who is passionate about creating apps and simplifying technnology for users.
//       </p>
//       </div>
//     //</section>
//   );
// };

// export default About;
