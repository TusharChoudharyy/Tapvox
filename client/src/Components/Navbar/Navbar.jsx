import "./Navbar.scss";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../assets/tapvox.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import ContactPopup from "../ContactSection/ContactPopup.jsx";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav((prev) => !prev);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={handleCloseNav}>
          <img src={Logo} alt="Tapvox Logo" />
        </a>

        {/* Links */}
        <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
          <li onClick={handleCloseNav}>
            <a href="/">Home</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#WhyChooseUs">Why Us</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#brand">Partners</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#features">Features</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#blogs">Blogs</a>
          </li>

          {/* Contact on mobile */}
          <li className="mobile-contact-btn" onClick={handleCloseNav}>
            <ContactPopup />
          </li>
        </ul>

        {/* Contact on desktop */}
        {/* <div className="navbar__btn">
          <ContactPopup />
        </div> */}

        {/* Menu Icon */}
        <div
          className={`navbar__menubar ${showNav ? "bg-color" : ""}`}
          onClick={handleNavToggle}
        >
          {showNav ? <FaTimes /> : <FaBars />}
        </div>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
