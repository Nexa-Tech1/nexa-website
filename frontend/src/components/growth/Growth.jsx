import React from "react";
import "./Growth.css";
import heroImage from "../../assets/heroImg-nexa.png";

const projects = [
  {
    title: "Public Health Campaign - Ministry of Health",
    subtitle: "Key Contact: Dr. Tewodros Adhanom | Associated Bodies: Addis Ababa Health Bureau (A.A. HB), FMHACA, EFDA",
    description: `We partnered with Ethiopia's Ministry of Health to design and execute a nationwide public health awareness campaign, aligned with the "No Mother Should Die at Birth" initiative. This engagement focused on maternal health communication, building trust with key stakeholders and driving measurable impact in public health outcomes.

As part of this initiative, Nexa played a leading role in the Afro Asia International Health Exhibition at the Addis Ababa Exhibition Center, mobilizing diverse stakeholders including embassies, hospitals, clinics, health centers, and pharmaceutical industries, creating a collaborative platform to strengthen Ethiopia's healthcare ecosystem.`,
    impact: [
      "21,000+ underprivileged individuals across Addis Ababa received full treatment, including surgeries and prescribed medicines, completely free of charge.",
      "Mobilization of 200+ hospitals, clinics, laboratories, and drugstores, working together to deliver care at scale.",
      "Support from 8 embassies and involvement of 12 government bureaus, contributing to the success of the initiative.",
      "Coverage and promotion by 30 media outlets, ensuring nationwide awareness and visibility."
    ],
    outcome: "A strengthened public health communication framework, expanded access to care for vulnerable communities, and a lasting impact on Ethiopia's healthcare system through multistakeholder collaboration."
  },
  {
    title: "Unilever - Market Activation in Ethiopia",
    description: `When Unilever entered the Ethiopian market, Nexa led its activation strategy. 
Through condominium campaigns, school activations, and weekend activations, we built awareness, trial, and repeat purchase across key product lines.
Over five years, our performance-driven approach transformed Unilever's Ethiopian operations into a €500 million business. `,
    keyDeliverables: [
      "Comprehensive Market Entry & Penetration Strategy",
      "Category penetration in food and household products",
      "Large-scale activations across condominiums, schools, and communities",
      "Sustained growth through awareness, trial, and repeat purchase campaigns"
    ],
    outcome: "A remarkable 1,000x revenue growth, positioning Unilever Ethiopia as a benchmark for regional success."
  },
  {
    title: "Real Estate Transformation - OVID Real Estate",
    description: "Identified Problem: An unprofessional brokerage system limiting growth. Proposed Solution: Development of a modern, professional brokerage framework. Outcome: Nexa successfully landed the first-ever head office for OVID Real Estate, setting a new benchmark for professionalism in the sector."
  },
  {
    title: "Real Estate Transformation - Jambo Group",
    description: `Jambo Group required a turnkey blueprint to build the business and capture the market quickly.
Nexa designed a unified partnership engine:
- Strategy (Growth Partners): Designed the partnership program and deployed a proactive sales team
- System (Nexa Tech): Developed the Keystone ERP & CRM platform
- Site Selection (Property Management): Leveraged geospatial data for 100+ plots
Results:
- 35 prime plots secured
- 2.5 Billion+ ETB development pipeline
- 90% reduction in lead-to-deal time`
  },
  {
    title: "International Expansion - Nexa Global",
    description: `Bridging local ambition with global opportunity. Outbound expansion to UAE guided 25+ Ethiopian companies with licensing and investor visas. Inbound FDI projects managed successfully, including the Diaspora Residence for 12 British passport holders, delivering $260,000 USD+ per investor.`
  },
  {
    title: "Dental Labs & Clinics - End-to-End Growth Program",
    description: `Timeline: 1-year engagement. Fullscale growth program covering acquisition, relationship management, and recurring revenue systems. Result: sustainable base of high-value clients and predictable monthly revenue streams.`
  }
];

const Growth = () => {
  return (
    <div className="growth-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Growth" className="hero-image" />
        <div className="hero-overlay">
          <h1>GROWTH JOURNEY</h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        <h2 className="section-title">Key Projects & Milestones</h2>
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3 className="project-title">{proj.title}</h3>
            {proj.subtitle && <p className="project-subtitle">{proj.subtitle}</p>}
            <p className="project-description">{proj.description}</p>
            {proj.impact && (
              <>
                <h4>Impact Highlights:</h4>
                <ul>
                  {proj.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {proj.keyDeliverables && (
              <>
                <h4>Key Deliverables:</h4>
                <ul>
                  {proj.keyDeliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {proj.outcome && (
              <>
                <h4>Outcome:</h4>
                <p>{proj.outcome}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Growth;
