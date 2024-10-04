import React from "react";
import Timeline from "../components/Timeline";
import "../styles/Experience.scss";

const Experience = () => {
  const events = [
    {
      date: "Jan 2024 – May 2024",
      title: "SaasOps Specialist - Corent Technology Inc",
      description: [
        "• Developed a SaaS product from open-source applications, implemented subscription models, and successfully deployed the application for launch on the AWS Marketplace.",
        "• Leveraged expertise in AWS cloud services and Corent’s SaaSOps to ensure a smooth and efficient development process.",
        "• Utilized entrepreneurial skills to launch a fully functional website promoting QuickDolibarr, a cloud-based SaaS application based on an open-source ERP and CRM software. This resulted in an effective platform for customers to purchase and explore its features.",
      ],
    },
    {
      date: "Sep 2022 – Dec 2022",
      title: "Student Assistant - University Corporation of CSU Monterey Bay",
      description: [
        "• Planned group activities to engage students and encourage attendance.",
        "• Checked in with students to help them maintain good progress. Helped a group of 30 students with coding problems and answered questions related to the program and internship search.",
        "• Tracked each student’s progress, sent reminders, and provided encouragement to ensure they remained focused on their goals, resulting in a 20% increase in attendance.",
      ],
    },
    {
      date: "May 2022 – Aug 2022",
      title: "Undergraduate Student Researcher - South Dakota State University",
      description: [
        "• Exploreded physics-informed neural network concepts from research papers and its Tensorflow implementation. Generated new data sets using MATLAB and conducted research on network performance resulting from different parameters.",
        "• Attended South Dakota EPSCoR Research Symposium to report findings on physics-informed neural networks and presented the findings to symposium attendees and at the AAAI conference.",
      ],
    },
  ];

  return (
    <div className="experience">
      <h1>My Timeline</h1>
      <Timeline events={events} />
    </div>
  );
};

export default Experience;
