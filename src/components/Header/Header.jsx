import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Correct import for React Router Link
import "./Header.css";
import Logo from "../../assects/logo.png";
import bars from "../../assects/bars.png";
// import link from "link-react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [MenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Header">
      <img src={Logo} alt="logo" className="logo" />
      {/* Mobile Menu Toggle Button */}
      {MenuOpen === false && isMobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu" // Accessibility
        >
          <img
            src={bars}
            alt="Menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className={`header-menu ${MenuOpen ? "open" : ""}`}>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="/">Home</Link> {/* Use Link component */}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="programs">Programs</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="reason">Why Us</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to="Plans">Plans</Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="Testimonials"
              smooth="true" // Adjust for smooth scrolling if needed
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
