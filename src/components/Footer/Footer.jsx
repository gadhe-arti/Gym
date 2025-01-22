import React from "react";
import "../Footer/Footer.css";
import instagram from "../../assects/instagram.png";
import linkdien from "../../assects/linkedin.png";
import github from "../../assects/github.png";
import logo from "../../assects/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkdien} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
