import React from 'react'
import avatar from '../../../assets/avatar.png';
import testimonial1 from '../../../assets/adika.png';
import testimonial2 from '../../../assets/ebms-logo.png';
import testimonial3 from '../../../assets/AIDITE.png';
import './Testimonial.css'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial">
            <h2 className="title">TESTIMONIALS</h2>
            <p className="subtitle">Hear what our clients say</p>
            <div className="testimonial-details">
                <div className="testimonial-left">
                    <div className="box">
                    <img src={testimonial1} alt="" />
                    <p className="comment">
                        “Nexa played a key role in supporting our international business expansion, particularly
                         during the process of opening our Dubai-based company. Their coordination, insights, and
                         professional network were highly valuable.”
                    </p>
                    <div className="individual">
                        <img src={avatar} alt="" /> {/* for avatar */}
                        <div className="right">
                            <p className="name">Awad Mohammed</p>
                            <p className="describtion">Founder and CEO</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="testimonial-right">
                  <div className="box">
                    <img src={testimonial2} alt="" />
                    <p className="comment">
                        “As a Dubai-based business services firm, we value partners who operate with clarity and 
                         professionalism. Nexa has been a dependable partner, contributing to cross-border 
                         collaboration and structured business support.”
                    </p>
                    <div className="individual">
                        <img src={avatar} alt="" /> {/* for avatar */}
                        <div className="right">
                            <p className="name">Mrs Anna</p>
                            <p className="describtion">Customer Relation Manager</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={testimonial3} alt="" />
                    <p className="comment">
                        “Nexa brings organization and trust to healthcare-related partnerships. Their ability 
                         to align service providers with structured client access reflects a strong understanding
                         of both business and professional standards.”
                    </p>
                    <div className="individual">
                        <img src={avatar} alt="" /> {/* for avatar */}
                        <div className="indiv-right">
                            <p className="name">Mrs Tian</p>
                            <p className="describtion">Account Manager, African Region </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial