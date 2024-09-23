import React from "react";
import "../styles/Project.scss";

function Project(props) {
  return (
    <div className="project">
      <h3>{props.projectNum}</h3>
      <div className="content">
        <div className="video">
          <video width="420" height="240" controls>
            <source src={props.projectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Render projectSkills with proper separators (e.g., spaces or commas) */}
        <div className="skills">
          {props.projectSkills.map((skill, index) => (
            <button key={index}>{skill}</button>
          ))}
        </div>

        {/* Add some spacing here */}
        <p className="description">{props.projectDescription}</p>

        <a
          href={props.projectGitHubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
