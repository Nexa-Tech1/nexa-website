import React from 'react'

const TimeLine = () => {
  return (
    <>
      <div className="timeline-box">
        <h2 className="title">THE NEXA GROWTH FRAME WORK</h2>
        <div className="timeline-line-container">
            <div className="timeline-line"></div>
            <div className="timeline-dot" style={{ left: "0%" }}>
            <p className="dot-label">STAGE 1 :  Deep dive & Diagnosis </p>
            </div>
            <div className="timeline-dot green" style={{ left: "33%" }}>
            <p className="dot-label">STAGE 2: Strategic Blueprint & System Design </p>
            </div>
            <div className="timeline-dot" style={{ left: "66%" }}>
            <p className="dot-label">STAGE 3: Disciplined Execution & System Design</p>
            </div>
            <div className="timeline-dot" style={{ left: "100%" }}>
            <p className="dot-label">STAGE 4 : Review, Scale & Compound</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TimeLine