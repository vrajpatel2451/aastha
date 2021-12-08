import React from 'react'
import arrow from '../images/arrow.png'

function Greetings() {
    return (
        <div className="greetings">
            <h2>contact us</h2>
            <h1 id="scroll-contact">Get in touch with us</h1>
            <a href="#scroll-contact">
            <img src={arrow}></img>
            </a>
        </div>
    )
}

export default Greetings
