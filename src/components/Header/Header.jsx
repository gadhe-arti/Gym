import React, { useState } from "react";
import "./Header.css";
import Bars from "../../assects/bars.png";
import Logo from "../../assects/logo.png";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="Header">
      <img src={Logo} alt="Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="Menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className={`header-menu ${menuOpened ? "open" : ""}`}>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="home" smooth={true} duration={500} className="link">
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="programs" smooth={true} duration={500} className="link">
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="reason" smooth={true} duration={500} className="link">
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="plans" smooth={true} duration={500} className="link">
              Plans
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="link"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
