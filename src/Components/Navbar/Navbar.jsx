import "./Navbar.scss";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../assets/tapvox.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
      <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}> <img src={Logo} alt="" /></a>

      <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
        <li onClick={() => setShowNav(false)}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => setShowNav(false)}>
          <a href="#">About</a>
        </li>
        <li onClick={() => setShowNav(false)}>
          <a href="#">Pricing</a>
        </li>
        <li onClick={() => setShowNav(false)}>
          <a href="#">Blog</a>
        </li>
      </ul>

      <a href="#" className="button-primary navbar__btn">Sign Up</a>

      <div className={`navbar__menubar ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}><FaBars /></div>
      </Wrapper>
    </nav>
  )
}

export default Navbar
