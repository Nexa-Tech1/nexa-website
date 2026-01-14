import React from 'react';
import nexaglobal from '../../assets/nexaglobal.png'
import nexatech from '../../assets/nexatech.png'
import nexagrowth from '../../assets/nexagrowth.png'
import nexaproperties from '../../assets/nexaproperties.png'
import heroImage from '../../assets/heroImg-nexa.png';
import './Division.css'

const Division = () => {
  const divisions = [
    {
      img: nexaglobal,
      text: (
        <>
          <span>Nexa Global</span> - strategic advisory and execution for international investment, market entry, and cross border expansion.
        </>
      )
    },
    {
      img: nexagrowth,
      text: (
        <>
          <span>Nexa Growth</span> - performance based marketing and sales system that generates predictable revenue, measurable ROI, and sustainable customer acquisition.
        </>
      )
    },
    {
      img: nexatech,
      text: (
        <>
          <span>Nexa Tech</span> - intelligence, luckily relevant software solutions that automate operations, empower SMEs, and enable data driven decision-making.
        </>
      )
    },
    {
      img: nexaproperties,
      text: (
        <>
          <span>Nexa Properties</span> - professional property and asset management services that establish trust, safeguard owner value, and elevate tenant experience.
        </>
      )
    },
  ];

  return (
    <div className="divisions-page">
      
      {/* Hero Image
      <div className="hero-image">
        <img src={heroImage} alt="Divisions" />
        <h1 className="hero-title">DIVISIONS</h1>
      </div> */}

      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="About Nexa" className="hero-image" />
        <div className="hero-overlay">
          <h1>DIVISIONS</h1>
        </div>
      </div>

      {/* Subtitle & Paragraph */}
      <div className="intro">
        <h2 className="subtitle">SERVICES & CAPABILITIES</h2>
        <p className="description">
          Nexa Business delivers growth through a unified ecosystem of specialized services, each engineered to solve Ethiopia's most persistent market challenges and collectively designed to compound measurable impact. Our capabilities span across four core entities, ensuring clients benefit from integrated solutions rather than fragmented service providers.
        </p>
      </div>

      {/* Division Boxes */}
      <div className="division-boxes">
        {divisions.map((div, index) => (
          <div className="division-box" key={index}>
            <div className="box-img">
              <img src={div.img} alt={`Division ${index + 1}`} />
            </div>
            <div className="box-text">
              <p>{div.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Division;
