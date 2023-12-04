// Header.js
import React from "react";
import "./Header.css";
const Header = ({ restaurantName }) => (
  <header className="header">
    <h1>{restaurantName}</h1>
  </header>
);

export default Header;
