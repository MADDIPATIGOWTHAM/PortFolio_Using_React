import React from "react";
import "./aboutme.css";
import img from "./images/profile.jpg";

const AboutMe = () => {
  const content = (
    <div className="about-me-container" id="about">
      <img className="picture" src={img} alt="Your Picture" />
      <div className="about-me-box">
        <p className="about-me-title">ABOUT ME</p>
        <p className="about-me-text">
          I am a self-independent, reliable, and friendly individual who works hard to
          achieve my goals. I am adaptable quickly and well-organized. I am always
          interested in learning the latest web & software technologies quickly. I am
          able to work well in teams as well as individually. My future goal is to
          become a senior full-stack developer.
        </p>
      </div>
    </div>
  );

  return content;
};

export default AboutMe;