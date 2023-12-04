// OnlinePresence.js
import React from "react";
import "./OnlinePresence.css";
const OnlinePresence = ({ website, socialMedia }) => (
  <section className="online-presence-container">
    <h2 className="center_alignment">Online Presence</h2>
    <div className="container">
      <div className="website-link">
        <a
          href={{ website }}
          style={{ textDecoration: "none", color: "white" }}
        >
          Website
        </a>
      </div>
      {/* <p style={{ color: "white" }} className="social-media-link">
  Social Media
</p> */}
      <ul>
        {Object.entries(socialMedia).map(([platform, link], index) => (
          <li key={index} className="social-media-link">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default OnlinePresence;
