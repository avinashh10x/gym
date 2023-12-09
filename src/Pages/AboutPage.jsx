import React from 'react'


import About from '../Component/About/About'
import Hero, { BgImg } from '../Component/Hero/Hero'
import Trainer from '../Component/trainer/Trainer'
import Footer from '../Component/Footer/Footer'
import Testimonial from '../Component/Testimonial/Testimonial'
import Navbar from '../Component/Navbar/Navbar'

import img1 from '../assets/img/classes/classes-2.jpg.webp'


const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero /> */}

    
        <BgImg url={img1} heading={'Train insane or remain the same.'} text={'Tailored fitness journeys for every body and every goal.'} />

      





      <About />
      <Trainer />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default AboutPage
