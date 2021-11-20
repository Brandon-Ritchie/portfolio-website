import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import linkedInLogo from "../../images/linkedin-logo.png";
import instagramLogo from "../../images/instagram-logo.png";
import githubLogo from "../../images/github-logo.png";

export function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/About" className="links">
          About
        </Link>
        <Link to="/Contact" className="links">
          Contact
        </Link>
        <Link to="/Projects" className="links">
          Projects
        </Link>
      </div>
      <div className="nav-socials">
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
  );
}
