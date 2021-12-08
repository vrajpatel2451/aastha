import React from 'react'
import Hero from '../components/Hero'
import './home.css'
import './homeMedia.css'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Numbers from '../components/Numbers'
import Gallary from '../components/Gallary'

const arrayContent = ["Building trust with every project and delivering beyond expectations", "Creating desirable living environments","We believe in Customer First philosophy","Shahi Kuteer","Sky Greens","Sky Builds"]

function Home() {
    return (
        <div className="home">
            <Hero content={arrayContent}></Hero>
            <Projects></Projects>
            <Numbers></Numbers>
            <Gallary></Gallary>
            <Contact></Contact>
        </div>
    )
}

export default Home
