// import React from "react";
// // import "./About.scss";
// import "../styles/About.scss";

// const About = () => {
//   return (
//     <section className="about-container">
//       <h1>About Me</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMak
//       </p>
//     </section>
//   );
// };

// export default About;

// src/pages/App.jsx
import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  const events = [
    {
      date: "2023-01-01",
      title: "Started Learning React",
      description: "I began learning React and how to build modern web apps.",
    },
    {
      date: "2023-03-15",
      title: "Built First React Project",
      description: "Completed my first project, a to-do app, using React.",
    },
    {
      date: "2023-06-01",
      title: "Got My First Job",
      description:
        "I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer..I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer.I landed my first job as a front-end developer.",
    },
  ];

  return (
    <div className="about">
      <h2>
        Hi, I'm Helen, a Software Engineer with a passion for building amazing
        projects!
      </h2>
      <h2>My Timeline</h2>
      <Timeline events={events} />
    </div>
  );
};

export default About;
