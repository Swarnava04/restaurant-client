import React from "react";
import "./Ambiance.css";
const Ambiance = ({ ambiance }) => (
  <section className="ambiance-container">
    <h2 className="center_alignment">Ambiance</h2>
    <p className="ambiance-description">{ambiance.description}</p>
  </section>
);

export default Ambiance;
