import React from "react";
import "./header.css";
import whitelogo from "../../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img className="logo" src={whitelogo} alt="whitelogo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors </span>
          <span className="heading-primary-sub"> is where life happens</span>
        </h1>

        <a href="#" className="btn btn-white">
          discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
