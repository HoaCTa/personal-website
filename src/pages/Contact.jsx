import React from "react";
import "../styles/Contact.scss";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedIn } from "@fortawesome/fa-linkedin-square";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SocialIcons from "./SocialIcons";

import { FaLinkedin, FaGithub } from "react-icons/fa"; // For LinkedIn and GitHub icons
import { MdEmail } from "react-icons/md"; // For Email icon
// library.add(...all);

// const camera = icon({ prefix: "fas", iconName: "camera" });

const Contact = () => {
  return (
    <div className="contact-container">
      <a
        href="https://www.linkedin.com/in/hoata/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/HoaCTa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>

      {/* Email Icon */}
      <a href="mailto:hoata.cam@gmail.com">
        <MdEmail size={30} />
      </a>

      {/* <a
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
      <a href="mailto:hoata.cam@gmail.com">Email Me</a> */}
    </div>
  );
};

export default Contact;
