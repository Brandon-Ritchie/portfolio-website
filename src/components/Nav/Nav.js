import React from "react";
import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <div>
      <h1>Brandon Ritchie</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
      </div>
      <div>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
}
