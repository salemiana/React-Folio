import React from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import { selfphoto } from "src/assets/images/selfphoto.jpg";
import  selfphoto  from "../../assets/images/selfphoto.jpg";
import { about } from "../../portfolio";

import "./style.css";

const About = () => {
  const { name, role, description, resume } = about;

  return (
    <div className="about center jingle">
      {name && (
        <h1>
          Hi, I am <span className="about-name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about-role">A {role}.</h2>}
      <p className="about-desc">{description && description}</p>

      <div> 
      <img className="photo"  src={ selfphoto } alt={"selfphoto"}/>
      </div>
          {/* className="photo"
          id="profilePic"
          style={{ width: "20%", height: "auto" }}
        /> */} 

      <div className="about-contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {/* {links && (
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
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
