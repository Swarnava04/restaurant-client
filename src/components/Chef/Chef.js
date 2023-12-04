// Chef.js
import React from "react";
import "./Chef.css";
const Chef = ({ chef }) => (
  <section className="chef-container">
    <h2>Chef: {chef.name}</h2>
    <p className="chef-bio">{chef.bio}</p>
    <p>Signature Dish: {chef.signature_dish}</p>
  </section>
);

export default Chef;
