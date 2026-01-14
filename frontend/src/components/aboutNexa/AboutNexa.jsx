import { useState } from "react";
import "./AboutNexa.css";
import heroImage from '../../assets/heroImg-nexa.png';
import core1 from '../../assets/core.png';
import core2 from '../../assets/core.png';
import core3 from '../../assets/core.png';
import core4 from '../../assets/core.png';
import award1 from '../../assets/award1.png';
import award2 from '../../assets/award2.png';
import award3 from '../../assets/award3.png';
import award4 from '../../assets/award4.png';

const accordionData = [
  {
    title: "WHO WE ARE",
    content: (
      <>
        <p>
          <strong>A Legacy of Market Leadership.</strong> Nexa Business Group
          stands as Ethiopia's trusted partner for international investors
          seeking rapid market entry and sustainable growth.
        </p>
        <p>
          Founded in 2013 as F ZEE Marketing and Communications PLC, we have built
          over a decade of operational excellence and established ourselves as
          the benchmark for market activation and brand strategy in Ethiopia.
        </p>
        <p>
          Today, Nexa has evolved into a dynamic business group that blends
          aggressive on-the-ground execution with high-level Investment Advisory
          and Technology solutions. We don't just provide guidance on the Ethiopian
          market — we unlock it.
        </p>
        <p>
          <span className="highlight">Our Core Expertise:</span> Market Activation &
          Business Development. The Ethiopian market offers immense opportunity,
          yet it comes with unique challenges in logistics, culture, and consumer
          behavior. Nexa bridges this gap by serving as the local infrastructure
          that connects global capital with effective local execution.
        </p>
        <p>
          <strong>Proven Market Penetration (A-T-R-P Approach):</strong> We specialize
          in transforming products into household names. Drawing on our legacy
          as F ZEE, we apply a data-driven A-T-R-P Funnel — Awareness, Trial, Repeat
          Purchase — to ensure every investment translates into measurable revenue growth.
        </p>
      </>
    ),
  },
  {
    title: "VISION AND PURPOSE",
    content: (
      <>
        <h4>Vision</h4>
        <p>
          To be Ethiopia's most trusted and sought-after partner for business growth —
          renowned for delivering measurable ROI, building intelligent and locally
          relevant software for SMEs, setting the standard for professionalism
          in real estate management, and serving as the vital bridge between Ethiopian
          enterprise and global capital.
        </p>
        <h4>Purpose</h4>
        <p>
          We design and execute performance-based marketing and sales engines that drive
          predictable revenue; build scalable, affordable technology that automates
          operations and solves real-world SME challenges; manage real estate assets
          with integrity and tenant-first excellence; and provide strategic advisory
          services that enable seamless international investment and expansion.
        </p>
      </>
    ),
  },
  {
    title: "OUR PROMISE",
    content: (
      <>
        <p>
          We don't sell services. We don't sell hours. We don't sell reports.
          What we deliver is impact — tangible, measurable outcomes that drive businesses forward.
          At the core of our philosophy is a single metric of success: your growth.
        </p>
        <h4>Beyond Marketing as Usual</h4>
        <p>
          We exist to challenge the status quo. Traditional agencies often leave clients with
          inflated promises, vague reports, and little accountability. We believe that era is over.
        </p>
        <p>
          Our philosophy is disruptive by design — anchored in transparency, disciplined execution,
          and an uncompromising focus on measurable outcomes. We don't just market, we engineer growth.
        </p>
      </>
    ),
  },
  {
    title: "CORE VALUES AND CULTURE",
    content: (
      <div className="grid-2x2">
        {[
          {
            img: core1,
            title: "Trust as Infrastructure",
            desc: "At Nexa, our culture is built on trust, discipline, and innovation—the very principles that address Ethiopia's most persistent market challenges."
          },
          {
            img: core2,
            title: "Innovation with Purpose",
            desc: "We measure success not only in revenue but in the transformation of industries, communities, and opportunities."
          },
          {
            img: core3,
            title: "Disciplined Execution",
            desc: "We move from deep analysis to measurable outcomes with rigor, consistency, and accountability."
          },
          {
            img: core4,
            title: "Collaboration and Synergy",
            desc: "Our ecosystem thrives on integration, where each entity amplifies the others to compound impact, Impact Beyond Business as Usual."
          }
        ].map((core, i) => (
          <div className="grid-card" key={i}>
            <img src={core.img} alt={core.title} />
            <h5>{core.title}</h5>
            <p>{core.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "TARGET MARKETS AND CLIENTS",
    content: (
      <>
        <p>
          <span className="highlight">Target markets & Clients</span> — Nexa Business is built to serve organizations
          and investors who demand more than "business as usual." Our ecosystem
          is designed to unlock growth for clients across Ethiopia and beyond,
          focusing on sectors where trust, disciplined execution, and access are most critical.
        </p>
        <ul>
          <li>Local Enterprises & SMEs - needing scalable systems</li>
          <li>Multinational Corporations entering Ethiopia</li>
          <li>Real Estate Developers & Property Owners</li>
          <li>Public Sector & Institutions</li>
          <li>International Investors & Trade Partners</li>
          <li>Healthcare & Specialized Industries</li>
        </ul>
        <p>
          <span className="highlight">Our unified ecosystem</span> — From Nexa Growth Partners and Nexa Global to Nexa Tech
          and Nexa Properties, every part of our ecosystem is built with intention. Together,
          these specialized entities form a powerful, integrated network with one unifying
          purpose: to be your trusted partner in execution. By combining expertise across
          industries under a single performance driven framework, we deliver seamless
          collaboration, measurable outcomes, and sustainable growth.
        </p>
      </>
    ),
  },
{
  title: "AWARDS AND RECOGNITION",
  content: (
    <div className="grid-2x2-awards">
      {[award1, award2, award3, award4].map((img, i) => (
        <div className="award-card" key={i}>
          <img src={img} alt={`Award ${i + 1}`} />
        </div>
      ))}
    </div>
  ),
},
];

const AboutNexa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-nexa">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="About Nexa" className="hero-image" />
        <div className="hero-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="intro">
        <h2 className="subtitle">ABOUT NEXA</h2>
        <p className="description">
          Nexa Business is Ethiopia’s new standard for growth. We exist to solve the country's
          most persistent challenges: trust, execution, and access. Through our unified ecosystem
          of four specialized entities, we deliver measurable impact across industries, communities, and borders.
        </p>
        <p className="seconddescription">
          <span>Our Promise:</span> Beyond Business as Usual — structured, intelligent growth that compounds over time.
        </p>
      </div>

      {/* Accordion */}
      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-header ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutNexa;
