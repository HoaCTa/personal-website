// src/pages/MainPage.jsx
import React from "react";
import { Link } from "react-router-dom";
// import Projects from "../components/Projects";
import "../styles/MainPage.scss";
import Project from "../components/Project";

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Links to Other Pages */}
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
      <div class="info">
        <img
          className="profile"
          src="https://via.placeholder.com/150"
          alt="profile photo of Helen"
        />
        <h1 className="name">Helen Ta</h1>
        <h2 className="location">Santa Ana, CA, United States</h2>
        <h3 className="object">"Software Engineer, Art Enthusiast"</h3>
      </div>
      {/* <br color="red" /> */}
      <p>
        Hi, I'm Helen, a Software Engineer with a passion for building amazing
        projects!
      </p>

      {/* Basic Profile Information */}
      {/* <div className="profile-info">
        <h2>Profile Info</h2>
        <p>Name: Helen</p>
        <p>Email: helen@example.com</p>
        <p>Location: California, USA</p>
      </div> */}

      {/* <Projects /> */}
      <Project
        projectNum="Project 1"
        projectVideo="path/to/video.mp4"
        projectSkills={["JavaScript", "React", "CSS"]} // Skills are passed as an array
        projectDescription="This is a description of project 1. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules"
        projectGitHubLink="https://github.com/username/project1"
      />

      <Project
        projectNum="Project 2"
        projectVideo="path/to/video.mp4"
        projectSkills={["JavaScript", "React", "CSS", "Java"]} // Skills are passed as an array
        projectDescription="This is a description of project 2. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules"
        projectGitHubLink="https://github.com/username/project1"
      />
    </div>
  );
};

export default MainPage;
