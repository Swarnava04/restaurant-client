// Sustainability.js
import React from "react";
import "./Sustainability.css";
const Sustainability = ({ initiatives }) => (
  <section className="sustainability-container">
    <h2 className="center_alignment">Sustainability Initiatives</h2>
    <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
      {initiatives.map((initiative, index) => (
        <li key={index} className="initiative-item">
          <strong>{initiative.name}:</strong> {initiative.description}
        </li>
      ))}
    </ul>
  </section>
);

export default Sustainability;
