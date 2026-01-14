import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const location = useLocation();

  /* =============================
     Header shadow on scroll
  ============================== */
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;
      header.classList.toggle("active", window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =============================
     Generic navigation + scroll
  ============================== */
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      history.push(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
    setSidebar(false);
  };

  /* =============================
     Logo click
  ============================== */
  const handleLogoClick = () => {
    handleNavClick("/");
  };

  /* =============================
     Contact scroll logic
  ============================== */
  const handleContactClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        const contact = document.getElementById("contact");
        contact?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth" });
    }
    setSidebar(false);
  };

  return (
    <header className="header">
      <div className="container flex">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        >
          <img src={logo} alt="logo" />
        </div>

        <div className="nav">
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            <li>
              <Link to="/" onClick={() => handleNavClick("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleNavClick("/about")}>
                About NEXA
              </Link>
            </li>
            <li>
              <Link to="/divisions" onClick={() => handleNavClick("/divisions")}>
                Divisions
              </Link>
            </li>
            <li>
              <Link to="/growth" onClick={() => handleNavClick("/growth")}>
                Growth
              </Link>
            </li>
            <li>
              <Link to="/innovation" onClick={() => handleNavClick("/innovation")}>
                Innovation
              </Link>
            </li>
            <li>
              <Link to="/impact" onClick={() => handleNavClick("/impact")}>
                Impact
              </Link>
            </li>

            <li className="contact-btn">
              <span
                onClick={handleContactClick}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </div>

        <button
          className="navbar-items-icon"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
