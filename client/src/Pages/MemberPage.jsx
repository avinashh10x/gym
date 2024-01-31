import React from 'react'
import Hero, { BgImg } from '../Component/Hero/Hero'
import Join from '../Component/JoinUs/Join'
import Pricing from '../Component/Pricing/Pricing'
import Testimonial from '../Component/Testimonial/Testimonial'
import Footer from '../Component/Footer/Footer'

import img1 from '../assets/img/gallery/gallery-1.jpg.webp'
import Navbar from '../Component/Navbar/Navbar'


const MemberPage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Navbar />


      <BgImg url={img1} heading={'Sweat today, shine tomorrow'} text={'Tailored fitness journeys for every body and every goal.'} />

      <Pricing />
      <Join />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default MemberPage
