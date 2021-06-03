import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/Sparragus/platzi-badges/master/src/images/logo.svg"
            alt="Logo platzi conf"
          />
        </a>
        <span className="fw-light">Platzi</span>
        <span className="fw-bold">Conf</span>
      </div>
    </div>
  );
}
