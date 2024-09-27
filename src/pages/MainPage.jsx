// src/pages/MainPage.jsx
import React from "react";
import { Link } from "react-router-dom";
// import Projects from "../components/Projects";
import "../styles/MainPage.scss";
import Project from "../components/Project";
import resume from "../assets/Resume_Hoa_Ta.pdf";
import Contact from "./Contact";

// const pathMap = {
//   '/': document.getElementById('home_nav'),
//   '/about': document.getElementById('about_nav'),
//   '/experience': document.getElementById('contact_nav'),
// };

// const path = location.pathname;

// if (pathMap[path]) {
//   pathMap[path].classList.add('active');
// }

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
            <a href={resume} download="Resume_Hoa_Ta.pdf">
              Download Resume
            </a>
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
      <Contact />

      {/* Basic Profile Information */}
      {/* <div className="profile-info">
        <h2>Profile Info</h2>
        <p>Name: Helen</p>
        <p>Email: helen@example.com</p>
        <p>Location: California, USA</p>
      </div> */}

      {/* <Projects /> */}
      <Project
        projectNum="Fabflix Movie Database Web App"
        projectVideo="path/to/video.mp4"
        projectSkills={[
          "HTML",
          "CSS",
          "Java",
          "JavaScript",
          "MySQL",
          "RESTful",
          "Tomcat",
          "AWS",
          "Android",
          "reCAPTCHA",
        ]}
        projectDescription="Developed architecture from scratch and implemented an extensive frontend using JavaScript, jQuery, and AJAX,
while also adapting the frontend functionality to seamlessly integrate with an Android app, ensuring consistent user
experience across platforms by utilizing the same backend API.
• Designed and implemented a website with 15 medium features, including display catalog of 1000 movies, secure
login with SHA256 hashing, bot detection with reCAPTCHA, and full-text search."
        projectGitHubLink="https://github.com/username/project1"
      />

      <Project
        projectNum="Spotify Browser in Angular"
        projectVideo="path/to/video.mp4"
        projectSkills={[
          "JavaScript",
          "jQuery",
          "Angular",
          "NodeJS",
          "Handjack.js",
        ]}
        projectDescription="Developed a Spotify Music Browser webpage utilizing the Spotify API. Created a frontend interface using Angular
and enabled searching for artists, albums, and tracks.
• Established communication with a Node.js/Express backend server to browse Spotify music. Implemented gestural
control functionality using the Handjack.js library for enhanced user interaction."
        projectGitHubLink="https://github.com/username/project1"
      />

      <Project
        projectNum="Project 3"
        projectVideo="path/to/video.mp4"
        projectSkills={["JavaScript", "React", "CSS", "Java", "HTML"]} // Skills are passed as an array
        projectDescription="This is a description of project 3. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules"
        projectGitHubLink="https://github.com/username/project1"
      />
      <Project
        projectNum="Project 4"
        projectVideo="path/to/video.mp4"
        projectSkills={["JavaScript", "React", "CSS", "Java", "HTML"]} // Skills are passed as an array
        projectDescription="This is a description of project 3. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules"
        projectGitHubLink="https://github.com/username/project1"
      />
      <Project
        projectNum="Project 5"
        projectVideo="path/to/video.mp4"
        projectSkills={["JavaScript", "React", "CSS", "Java", "HTML"]} // Skills are passed as an array
        projectDescription="This is a description of project 3. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules. By using these variables, we can easily reuse the values across multiple CSS rules"
        projectGitHubLink="https://github.com/username/project1"
      />
    </div>
  );
};

export default MainPage;
