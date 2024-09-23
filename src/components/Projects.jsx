// src/components/Projects.jsx
import React from "react";
import "../styles/Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <div>
            <video width="420" height="240" controls>
              <source
                src="https://www.youtube.com/watch?v=ZVyIIyZJutM"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <button>SQL</button>
          <button>JS</button>
          <button>Java</button>
          <button>RESTful</button>
          <p>
            Description of project 1. By using these variables, we can easily
            reuse the values across multiple CSS rules. The .button class and
            the .link class both use the $primary-color variable for their color
            property, ensuring a consistent color scheme throughout the
            stylesheets. Similarly, the $font-size variable is used for setting
            the font size in both classes.
          </p>
          <a
            href="https://github.com/username/project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <h3>Project 2</h3>
          <div>
            <video width="420" height="240" controls>
              <source
                src="https://www.youtube.com/watch?v=ZVyIIyZJutM"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <button>SQL</button>
          <button>JS</button>
          <button>Java</button>
          <button>RESTful</button>
          <p>
            Description of project 2. By using these variables, we can easily
            reuse the values across multiple CSS rules. The .button class and
            the .link class both use the $primary-color variable for their color
            property, ensuring a consistent color scheme throughout the
            stylesheets. Similarly, the $font-size variable is used for setting
            the font size in both classes.
          </p>
          <a
            href="https://github.com/username/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
};

export default Projects;
