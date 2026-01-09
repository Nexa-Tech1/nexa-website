import React from "react";
import logorec from "../../../assets/logorec.png"; 
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left side */}
        <div className="footer-left">
          <img src={logorec} alt="Nexa Logo" className="footer-logo" />
          <h3 className="company-name">NEXA BUSINESS GROUP PLC</h3>
        </div>

        {/* Right side */}
        <div className="footer-right">

          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Leadership</li>
              <li>Impact</li>
              <li>Ecosystem</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>SISTER COMPANIES</h4>
            <ul>
              <li>Nexa Global</li>
              <li>Nexa Growth Partners</li>
              <li>Nexa Tech</li>
              <li>Nexa Properties</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>INSIGHTS & TRUST</h4>
            <ul>
              <li>Insights</li>
              <li>Case Studies</li>
              <li>Press</li>
              <li>Testimonials</li>
              <li>Awards</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Terms of use</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nexa Business Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
