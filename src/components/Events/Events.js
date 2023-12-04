// Events.js
import React from "react";
import "./Events.css";
const Events = ({ upcomingEvents }) => (
  <section className="events-container">
    <h2 className="center_alignment">Upcoming Events</h2>
    <ul style={{ listStyle: "none" }}>
      {upcomingEvents.map((event, index) => (
        <li key={index} className="event-name">
          <strong>{event.name}</strong>
          <p>Date: {event.date}</p>
          <p>{event.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Events;
