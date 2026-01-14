import React from "react";
import "./Impact.css";
import heroImage from "../../assets/heroImg-nexa.png";

const sustainabilityItems = [
  {
    title: "Sustainability",
    description: "Embedding ESG principles into every project, ensuring impact that endures."
  },
  {
    title: "Careers",
    description: "Creating pathways for talent to grow, innovate, and lead within a high-performance ecosystem."
  },
  {
    title: "Culture",
    description: "Trust, discipline, and collaboration as the DNA of our workplace."
  },
  {
    title: "Global Exposure",
    description: "Opportunities for international collaboration and career acceleration."
  }
];

const metrics = [
  "Revenue Growth - Percentage increases in client sales and market share.",
  "Operational Efficiency - Reduction in costs and time through automation and system design.",
  "Market Reach - Expansion into new geographies, industries, and customer segments.",
  "Trust & Satisfaction - Tenant satisfaction scores, client retention rates, and stakeholder confidence.",
  "ROI & Impact - Campaign performance, investment returns, and community-level outcomes."
];

const caseStudies = [
  "Public Health Campaign - Ministry of Health: Delivered nationwide outreach with measurable reach and engagement, improving awareness.",
  "Unilever - Market Activation in Ethiopia: Executed a performance-based activation strategy that drove predictable revenue and positioned Ethiopia as a growth hub.",
  "Real Estate Transformation - OVID Real Estate & Jambo Group: Established trust-driven property management systems, increasing tenant satisfaction and safeguarding owner value.",
  "International Expansion - Nexa Global: Enabled seamless cross-border investment and advisory, connecting Ethiopian businesses with global opportunities.",
  "Dental Labs & Clinics - End-to-End Growth Program: Designed and executed a full growth framework, automating operations and scaling patient services."
];

const Impact = () => {
  return (
    <div className="impact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Impact" className="hero-image" />
        <div className="hero-overlay">
          <h1>IMPACT & PERFORMANCE</h1>
        </div>
      </div>

      {/* Sustainability & Careers Section */}
      <div className="section-container">
        <h2 className="section-title">Sustainability & Careers</h2>
        <p className="section-description">
          At Nexa, growth is measured not only in revenue but in responsibility. We believe that sustainable business practices are the foundation of long-term success, and we embed this principle into every part of our ecosystem.
        </p>

        <div className="grid-2x2">
          {sustainabilityItems.map((item, index) => (
            <div className="grid-card" key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics & Case Studies Section */}
      <div className="section-container">
        <h2 className="section-title">Metrics & Case Studies</h2>
        <p className="section-description">
          At Nexa, success is not defined by activity — it is measured by outcomes. Our ecosystem is designed to deliver predictable growth, disciplined execution, and measurable impact, and we track every engagement against clear performance indicators.
        </p>

        <div className="metrics">
          <h4>Key Metrics We Track</h4>
          <ul>
            {metrics.map((metric, i) => (
              <li key={i}>{metric}</li>
            ))}
          </ul>
        </div>

        <div className="case-studies">
          <h4>Case Studies</h4>
          <ul>
            {caseStudies.map((study, i) => (
              <li key={i}>{study}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Impact;
