import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from '../../../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const location = useLocation();

  // Scroll header shadow
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });

  // Logo click
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      history.push("/");
    }
    setSidebar(false);
  };

  // Contact button click
  const handleContactClick = () => {
    if (location.pathname !== "/") {
      history.push("/"); // navigate to homepage first
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay to allow navigation
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSidebar(false);
  };

  return (
    <header className='header'>
      <div className="container flex">
        <div className="logo" style={{ cursor: "pointer" }} onClick={handleLogoClick}>
          <img src={logo} alt="logo" />
        </div>

        <div className="nav">
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About NEXA</Link></li>
            <li><Link to="/divisions">Divisions</Link></li>
            <li><Link to="/growth">Growth</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li className='contact-btn'>
              <span onClick={handleContactClick} style={{ cursor: "pointer" }}>
                Contact Us
              </span>
            </li>
          </ul>
        </div>

        <button
          className='navbar-items-icon'
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}

export default Header;
