// Awards.js
import React from "react";
import "./Awards.css";
const Awards = ({ awards }) => (
  <section className="awards-container">
    <h2 className="center_alignment">Awards</h2>
    <ul className="award-section">
      {awards.map((award, index) => (
        <li
          key={index}
          className="award-item"
        >{`${award.year} - ${award.organization}: ${award.award}`}</li>
      ))}
    </ul>
  </section>
);

export default Awards;
