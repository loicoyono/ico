import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"> ICO </div>
        <span>toogle</span>
      </div>
      <div className="n-right">
        <div className="n-list n-button">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Expérience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
