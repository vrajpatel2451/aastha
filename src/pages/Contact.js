import React from 'react'
import ContactPageComp from '../components/ContactPageComp'
import Greetings from '../components/Greetings'
import './contact.css'

function Contact() {
    return (
        <div className="contact-page">
            <Greetings></Greetings>
            <ContactPageComp></ContactPageComp>
        </div>
    )
}

export default Contact
