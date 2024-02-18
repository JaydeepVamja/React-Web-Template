import React from 'react'
import Slider from '../components/Slider';
import Services from '../components/Services';
import About from '../components/About';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';

function Home() {
    return (
        <>
            <Slider />
            <Services />
            <About />
            <Project />
            <Testimonial />
        </>
    )
}

export default Home
