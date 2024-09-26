// src/components/Timeline.jsx
import React from "react";
import "../styles/About.scss";

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
