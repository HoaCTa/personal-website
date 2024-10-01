import React from "react";
import "../styles/Contact.scss";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedIn } from "@fortawesome/fa-linkedin-square";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SocialIcons from "./SocialIcons";

import { FaLinkedin, FaGithub } from "react-icons/fa"; // For LinkedIn and GitHub icons
import { MdEmail } from "react-icons/md"; // For Email icon

import { Button } from "@react-email/button";

// library.add(...all);

// const camera = icon({ prefix: "fas", iconName: "camera" });

const handleEmailClick = (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "mailto:hoata.cam@gmail.com"; // Change to your email
};

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

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{hoatavn@gmail.com}}&su=Subject&body=Body%20Text"
        rel="noopener noreferrer"
      >
        <MdEmail size={30} />
      </a>
    </div>
  );
};

export default Contact;
