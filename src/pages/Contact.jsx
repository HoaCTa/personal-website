import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <a
        href="https://www.linkedin.com/in/hoata/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/HoaCTa"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a href="mailto:hoata.cam@gmail.com">Email Me</a>
    </div>
  );
};

export default Contact;
