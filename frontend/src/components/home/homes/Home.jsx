import React from 'react'

const Home = () => {
  return (
    <>
      <section className='home'>
            <div className="home-details">

                {/* SEO H1 – visible to search engines, subtle for users */}
                <h1 className="sr-only">
                  Trusted Growth Partner for Corporates in Ethiopia
                </h1>

                
                <h2 className="title">WHERE TRUST MEETS DISCIPLINED EXECUTION</h2>
                <p className="subtitle">
                    We solve Ethiopia’s biggest business challenges with intelligent systems, 
                    integrated capabilities, and a performance-driven approach built to scale.
                </p>
                <div className="buttons">
                    <a href="#contact" className="button contact-btn">Contact Us</a>
                    <a href="/divisions" className="button explore-btn">Explore Our Divisions</a>
                </div>
            </div>
      </section>
    </>
  )
}

export default Home