import React from 'react'
import Home from '../home/homes/Home'
import PromiseSection from '../home/PromiseSection'
import About from '../home/about/About'
import TimeLine from '../home/TimeLine'
import Testimonial from '../home/testimonial/Testimonial'
import ExploreMore from '../home/ExploreMore'
import Contact from '../home/contact/Contact'

const HomePages = () => {
  return (
    <>
      <Home />
      <PromiseSection />
      <About />
      <TimeLine />
      <Testimonial />
      <ExploreMore />
      <Contact />
    </>
  )
}

export default HomePages