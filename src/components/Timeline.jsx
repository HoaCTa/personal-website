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

            {/* Rendering description as a list of strings */}

            <div className="description">
              {event.description.map((descItem, descIndex) => (
                <p key={descIndex} className="description-item">
                  {descItem}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
