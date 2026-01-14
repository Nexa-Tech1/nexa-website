import React from 'react'
import { Link } from "react-router-dom"
import explore1 from '../../assets/explore1.png'
import explore2 from '../../assets/explore2.png'
import explore3 from '../../assets/explore3.png'
import './ExploreMore.css'

const ExploreMore = () => {
  return (
    <>
      <div className="explore">
         <div className="explore-detail">
                <h2 className="title">EXPLORE MORE</h2>
                <div className="image-cards">
                    <Link to="/impact" className="image-card">
                        <img src={explore1} alt="" />
                        <div className="overlay-text">IMPACT & PERFORMANCE</div>
                    </Link>

                    <Link to="/innovation" className="image-card">
                        <img src={explore2} alt="" />
                        <div className="overlay-text">INNOVATION & PARTNERSHIPS</div>
                    </Link>

                    <Link to="/growth" className="image-card">
                        <img src={explore3} alt="" />
                        <div className="overlay-text">GROWTH JOURNEY</div>
                    </Link>
                </div>
         </div>
      </div>
    </>
  )
}

export default ExploreMore