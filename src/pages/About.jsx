import React from "react";
// import "./About.scss";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about">
      <img
        className="profile"
        src="https://via.placeholder.com/150"
        alt="profile photo of Helen"
      />
      <div className="content">
        <h1>Nice to meet you!</h1>
        <p>
          My name is Hoa Ta, and I recently graduated with a Bachelor's Degree
          in Computer Science from University of California, Irvine. During my
          studies, I developed a wide range of skills in software development,
          completing several projects, including web and mobile applications
          using Java and JavaScript. I’m also proficient in Python and SQL. I
          love drawing realistic portraits in my free time.
        </p>
      </div>
    </div>
  );
};

export default About;
