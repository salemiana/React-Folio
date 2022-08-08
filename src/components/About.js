import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
  return (
    // <section className="my-2">
    //   <h1 id="about-me"> Me </h1>
    //   
      <div className="my-2">
        <p> I am a full stack developer </p>
        <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <p className="content">
        I am Salem, a full stack developer who is passionate about creating apps and simplifying technnology for users.
      </p>
      </div>
    //</section>
  );
};

export default About;
