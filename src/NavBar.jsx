import React from "react";
import Menu from "./Menu";

function NavBar() {
  return (
    <>
      {/* Navbar (sit on top) */}
      <div className="w3-top">
        <div
          className="w3-bar w3-white w3-padding w3-card"
          style={{ letterSpacing: 4 }}
        >
          <a href="#home" className="w3-bar-item w3-button">
            Gourmet au Catering
          </a>
          {/* Right-sided navbar links. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
            <Menu item="About" link="#about"/>
            <Menu item="Menu" link="#menu"/>
            <Menu item="Contact" link="#contact"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
