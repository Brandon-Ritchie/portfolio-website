import React from "react";
import "./About.css";
import mainPortrait from "../../images/main-portrait.jpg";

export function About(props) {
  return (
    <div className="container">
      <div className="article">
        <div className="about-me-container">
          <h2>About Me</h2>
          <p>
            I am an experienced Operations and IT manager with a demonstrated
            history of working in the entertainment industry.
          </p>
          <p>
            Skilled in creative problem solving, organizational skills,
            information technology, logistics management, and leadership, I am a
            strong operations professional with a Master's degree focused in
            Music Performance from Youngstown State University.
          </p>
          <p>
            I spend a lot of my free time with one of my many hobbies, including
            web development, 3D printing, performing, and spending time with my
            wife, Hannah, and my two cats, Cricket and Flick.
          </p>
        </div>
        <div className="portrait-container">
          <img src={mainPortrait} />
        </div>
        <div className="languages-container">
          <h2>Languages</h2>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
