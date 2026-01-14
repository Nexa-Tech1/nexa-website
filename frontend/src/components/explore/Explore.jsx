import React from "react";
import "./Explore.css";
import heroImage from "../../assets/heroImg-nexa.png";

const Explore = () => {
  return (
    <div className="explore-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Innovation & Partnership" className="hero-image" />
        <div className="hero-overlay">
          <h1>INNOVATION & PARTNERSHIP</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        {/* Innovation */}
        <div className="content-block">
          <h2>Innovation</h2>
          <p>
            At Nexa, innovation is not an afterthought – it is the engine of our
            ecosystem. We design intelligent, locally relevant solutions that
            address Ethiopia’s unique market challenges while ensuring
            capability on a global stage.
          </p>
        </div>

        {/* Partnerships */}
        <div className="content-block">
          <h2>Partnerships</h2>
          <p>
            Partnerships are the multiplier of this innovation. Nexa collaborates
            with global investors, technology providers, development
            institutions, and local enterprises to extend market access,
            accelerate opportunity, and compound growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
