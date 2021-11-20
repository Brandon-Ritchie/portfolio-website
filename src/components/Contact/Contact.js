import React from "react";
import "./Contact.css";
import githubLogo from "../../images/github-logo.png";
import emailIcon from "../../images/email-icon.png";
import instagramLogo from "../../images/instagram-logo.png";
import linkedInLogo from "../../images/linkedin-logo.png";

export function Contact(props) {
  return (
    <div className="container">
      <div className="article">
        <h2>Contact</h2>
        <p>
          Have something I can help you with? I would love to hear from you!
        </p>
        <div className="socials">
          <a href="mailto: britchie@brandonritchie.tech">
            <img src={emailIcon} />
          </a>
          <a href="https://www.linkedin.com/in/brandon-ritchie-70106219a/">
            <img src={linkedInLogo} />
          </a>
          <a href="https://www.instagram.com/_brandon.ritchie/">
            <img src={instagramLogo} />
          </a>
          <a href="https://github.com/brandon-ritchie">
            <img src={githubLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}
