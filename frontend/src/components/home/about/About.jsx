import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import nexaglobal from '../../../assets/nexaglobal.png'
import nexatech from '../../../assets/nexatech.png'
import nexagrowth from '../../../assets/nexagrowth.png'
import nexaproperties from '../../../assets/nexaproperties.png'
import Leadership from '../leadership/Leadership';
import { useHistory } from 'react-router-dom'; 

const About = () => {

   const history = useHistory();

  const handleClick = () => {
    history.push('/about'); 
  };


  return (
    <>
      <section className="about">
        <div className="about-content">
            <div className="about-details">
                <div className='left'>
                    <h2 className="title">ABOUT NEXA</h2>
                    <p className="subtitle">
                        Nexa Business is Ethiopia’s new standard for growth. We exist to solve the 
                        country's most persistent challenges: trust, execution, and access.
                    </p>
                    <p className="subtitle">
                        Through our unified ecosystem of four specialized entities, we deliver 
                        measurable impact across industries, communities, and borders.
                    </p>
                    <button className="learn-more-btn" onClick={handleClick}>Learn more <ArrowForwardIosIcon fontSize='small'/></button>
                </div>

                <div className='right'>
                    <div className="cross-window">
                        <div className="quadrant">
                            <h2 className='title'>10×+ Revenue Growth</h2>
                            <p className='subtitle'>From ETB 400K to ETB 4M+ monthly.</p>
                        </div>
                        <div className="quadrant ">
                            <h2 className='title'>450+ B2B Partners</h2>
                            <p className='subtitle'>Market-leading B2B expansion.</p>
                        </div>
                        <div className="quadrant">
                            <h2 className='title'>ROI-Focused Strategy</h2>
                            <p className='subtitle'>Measured. Optimized. Proven</p>
                        </div>
                        <div className="quadrant">
                            <h2 className='title'>Sustainable Growth</h2>
                            <p className='subtitle'>Predictable, recurring client revenue.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Leadership />

            <div className="services-capabilities">
                <h2 className='title'>SERVICES & CAPABILITIES</h2>
                <p className='subtitle'>Our capabilities span across 4 core entities, ensuring clients 
                benefit from integrated solutions rather than fragmented service providers.</p>
                  <div className="cross-window-wrapper">
                    <div className="cross-window-logo">
                        <div className="quadrant">
                            <img src={nexaglobal} alt="" />
                        </div>
                        <div className="quadrant ">
                            <img src={nexatech} alt="" />
                        </div>
                        <div className="quadrant">
                            <img src={nexagrowth} alt="" />
                        </div>
                        <div className="quadrant">
                            <img src={nexaproperties} alt="" />
                        </div>
                    </div>
                  </div>

            </div>
        </div>

      </section>
    </>
  )
}

export default About