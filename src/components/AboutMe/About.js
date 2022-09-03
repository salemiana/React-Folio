import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { about } from "../../portfolio";

import "./style.css";

const About = () => {
  const { name, role, description, SelfPhoto, resume, links } = about;

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
