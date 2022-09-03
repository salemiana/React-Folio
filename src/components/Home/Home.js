/** @format */

import React, { useEffect, useState } from "react";
// import "./index.scss";
import Animate from "../Animate/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink} from "react-router-dom";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H","i,"," ", "I'", "m","","S", "a", "l", "e", "m", " "];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

 

  return (
    <>
    <section className="hero-section d-flex align-items-center justify-content-center">

      <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center mt-5 col-12">
        {/* Main Hero content */}
        <div className="hero-content d-flex flex-column align-items-center  col-sm-12 col-md-6 ">
          <h1 className="h1-home">
            <Animate
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2 className="h2-home">FullStack Developer</h2>
          <div className="contact-btns d-flex-row">
            <NavLink exact="true" activeclassname="active" to="/contact">
              <button className="contact-me-btn mt-3">Contact me</button>
            </NavLink>
            <span className="contact-span ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="blue" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SAlemiana/"
              >
                <FontAwesomeIcon icon={faGithub} color="blue" />
              </a>
            </span>
          </div>
        </div>
   
      </div>
    </section>
    <Loader type="pacman" />
    </>
  );
};

export default Home;