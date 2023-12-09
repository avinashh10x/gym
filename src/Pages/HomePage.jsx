import React, { useRef } from 'react'
import About from '../Component/About/About'
import Join from '../Component/JoinUs/Join'
import Classes from '../Component/Classes/Classes'
import Pricing from '../Component/Pricing/Pricing'
import Testimonial from '../Component/Testimonial/Testimonial'
import BMI from '../Component/BMI/BMI'
import Footer from '../Component/Footer/Footer'
import Hero from '../Component/Hero/Hero'
import Trainer from './../Component/trainer/Trainer';

const HomePage = () => {

    const joinRef = useRef(null);

    const scrollToJoin = () => {
        joinRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <div>
            <Hero scrollToJoin={scrollToJoin} />
            <Join ref={joinRef}/>
            <About />
            <Classes />
            <Pricing />
            {/* <Trainer  /> */}
            <Testimonial />
            <BMI />
            <Footer />
        </div>
    )
}

export default HomePage
