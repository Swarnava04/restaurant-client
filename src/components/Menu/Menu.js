// Menu.js
import React from "react";
import "./Menu.css";
const Menu = ({ categories, seasonalMenu }) => (
  <section className="menu-container">
    <h2 style={{ textAlign: "center", fontSize: "32px" }}>Menu</h2>
    {categories.map((category, index) => (
      <div key={index}>
        <h3 className="menu-category">{category.name}</h3>
        <ul>
          {category.items.map((item, i) => (
            <li key={i} className="menu-item">
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {seasonalMenu && (
      <div className={"seasonal-menu"}>
        <h3 className={"menu-category"}>Seasonal Menu</h3>
        {seasonalMenu.items.map((item, index) => (
          <div key={index} className={"menu-item"}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default Menu;
