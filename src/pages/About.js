import React from 'react'
import AboutSection from '../components/AboutSection'
import Accomplishments from '../components/Accomplishments'
import Hero from '../components/Hero'
import Numbers from '../components/Numbers'
import Quote from '../components/Quote'
import Vision from '../components/Vision'
import './about.css'
import './aboutMedia.css'
import arrow from '../images/arrow.png'

const arrayContent = ["Building trust with every project", "Delivering beyond expectations","Creating desirable living environments"]

function About() {
    return (
        <div className="about-page">
            {/* <Hero content={arrayContent}></Hero> */}
            <div className="hero-main">
            <div className= "hero hero-03 active">
                <div className="heading-hero">About Us</div>
                {/* <button className="btn-hero">view more</button> */}
            <div id="scroll"></div>
                <a href="#scroll"><img src={arrow}></img></a>
            </div>
            </div>
            <AboutSection></AboutSection>
            <Vision></Vision>
            <Quote></Quote>
            <Numbers></Numbers>
            <Accomplishments></Accomplishments>
        </div>
    )
}

export default About
