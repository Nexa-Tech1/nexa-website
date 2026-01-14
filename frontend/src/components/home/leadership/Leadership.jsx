import React, { useState, useRef, useEffect, useCallback } from "react";
import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";

const cards = [
  { img: card1, title: "Business development lead", desc: "Builds strategic partnership, drives client acquisition, and ensures sustainable revenue growth." },
  { img: card2, title: "AI & technology lead", desc: "Oversees intelligent local software solutions ensuring innovation and automation for SMEs." },
  { img: card3, title: "Investment and FDI promotion lead", desc: "Connects Ethiopia to global capital flows enabling inbound investment and outbound expansion." },
  { img: card1, title: "Real estate lead", desc: "Sets benchmark in property and asset management ensuring trust, compliance, and superior tenant experiences." },
  { img: card2, title: "EXIM(export-import) Lead", desc: "Facilitates street logistics and cross-border commerce strengthening Ethiopia's global market integration." },
  { img: card3, title: "Global inbound and outbound lead", desc: "Manages international advisory, enabling seamless expansion and investment opportunities." },
  { img: card1, title: "Chief financial officer(CFO)", desc: "Insurance, financial discipline, risk management, and investor confidence." },
  { img: card2, title: "Chief marketing and communication officer(CMO)", desc: "Shapes Nexa’s brand narrative, manages public relations, and amplifies client experience." },
  { img: card3, title: "Head of human capital and culture", desc: "Builds organizational culture, talent pipelines, and leadership development programs." },
  { img: card1, title: "Head of sustainability and impact", desc: "Ensures Nexa’s growth with ESG principles, fostering long-term community and environmental impact." },
];

const VISIBLE = 4;
const GAP = 24;

const Leadership = () => {
  const [index, setIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const scrollTimeout = useRef(null);

  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const cardRef = useRef(null);

  const maxIndex = cards.length - VISIBLE;

  const getStep = () => {
    if (!cardRef.current) return 0;
    return cardRef.current.offsetWidth + GAP;
  };

  const clampTranslate = (value) => {
    const containerWidth = containerRef.current.offsetWidth;
    const rowWidth = rowRef.current.scrollWidth;
    return Math.max(0, Math.min(value, rowWidth - containerWidth));
  };

  useEffect(() => {
    const step = getStep();
    const target = clampTranslate(index * step);
    setTranslateX(target);
    currentTranslate.current = target;
  }, [index]);

  /* -------- Mouse Drag -------- */
  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    const next = clampTranslate(currentTranslate.current - delta);
    setTranslateX(next);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest();
  };

  /* -------- Snap Logic -------- */
  const snapToNearest = useCallback(() => {
    const step = getStep();
    const newIndex = Math.round(translateX / step);
    setIndex(Math.max(0, Math.min(newIndex, maxIndex)));
  }, [translateX, maxIndex]);

  /* -------- Trackpad & Mouse Wheel (passive: false) -------- */
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
   
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

      e.preventDefault(); 

      const next = clampTranslate(translateX + e.deltaX);
      setTranslateX(next);
      currentTranslate.current = next;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(snapToNearest, 120);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [translateX, snapToNearest]);

  return (
    <div className="leadership">
      <h2 className="title">LEADERSHIP TEAMS</h2>

      <div className="slider-wrapper">
        <button
          className="arrow left"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
        >
          ‹
        </button>

        <div
          className="cards-container"
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            className="cards-row"
            ref={rowRef}
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.4s ease",
            }}
          >
            {cards.map((card, i) => (
              <div className="card" key={i} ref={i === 0 ? cardRef : null}>
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Leadership;
