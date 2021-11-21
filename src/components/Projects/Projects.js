import React from "react";
import "./Projects.css";

export function Projects(props) {
  return (
    <div className="article">
      <div className="introduction">
        <p>
          You can find the source code to most of my projects on my GitHub page:{" "}
          <a href="https://GitHub.com/Brandon-Ritchie">
            GitHub.com/Brandon-Ritchie
          </a>
        </p>
      </div>
      <div className="pi-display project">
        <h2>
          <a href="https://github.com/Brandon-Ritchie/PiDisplay">PiDisplay</a>
        </h2>
        <p>
          PiDisplay is a a program designed to automate digital displays using a
          raspberry pi.
        </p>
        <p>
          PiDisplay uses Flask to create a self hosted website that can be
          accessed through the ip address of the raspberry pi. After getting
          past the authentication page, the website hosts a weekly schedule that
          will allow the raspberry pi to completely automate the display. The
          raspberry pi uses CEC control, also known as ARC, to boot the display.
          After booting the display, the program uses selenium to set up a
          Chromium browser in kiosk mode and open the website that hosts the
          links for the slideshows. This allows the program to open any number
          of slideshows that are listed on a publicly available website. After
          opening the specified link, the program uses pyautogui to move the
          mouse to the bottom right corner of the display, creating a more
          professional look.
        </p>
        <p>
          If the display needs to switch between slides at a certain point, you
          can also use the switch time to schedule a second slide to be shown at
          a specified time. Once the program reaches the end time, the program
          will power off the display and close all Chromium windows that may be
          open.
        </p>
        <p>
          The PiDisplay uses selenium, pyautogui, flask, flask_wtf, WTForms,
          sqlite3 through flask_SQLAlchemy, crontab, HTML, CSS, and Bash.
        </p>
      </div>
      <div className="jammming project">
        <h2>
          <a href="https://github.com/Brandon-Ritchie/jamming">Jammming</a>
        </h2>
        <p>
          Jammming is a project that implements the Spotify API with React
          components to create and save playlists to a user's Spotify account.
          The user is able to search for tracks, add them to a playlist on the
          app, and save the playlist to their personal account after
          authenticating through implicit grant flow.
        </p>
        <p>
          The app uses React, CSS, JSX, and Javascript, taking advantage of
          ES6's more concise syntax for easier maintenance and readability.
        </p>
        <p>
          You can see the app live at{" "}
          <a
            href="https://brandonritchie.tech/jammming"
            className="jammming-link"
          >
            brandonritchie.tech/jammming
          </a>
          .
        </p>
      </div>
      <div className="sliding-puzzle project">
        <h2>
          <a href="https://github.com/Brandon-Ritchie/PythonSlidingPuzzle">
            Python Sliding Puzzle
          </a>
        </h2>
        <p>
          A version of a classic sliding puzzle game, this terminal-based game
          shows a game board and then asks for input from the user to move the
          puzzle pieces. The game finishes once all pieces are in the correct
          order.
        </p>
        <p>
          The program uses vanilla Python, classes, and basic OOP principals to
          create a game board, pieces, and check game states and if the selected
          move is viable.
        </p>
      </div>
      <div className="portfolio-website project">
        <h2>
          <a href="https://github.com/Brandon-Ritchie/Portfolio-Website">
            Portfolio Website
          </a>
          <p>The source code for the website you are on right now!</p>
        </h2>
      </div>
    </div>
  );
}
