import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="logo-footer">
                    <img src={logo}></img>
                </div>
                <div className="contact-details">
                    <p className="address">154, Chalandri, Ahmedabad, 3880015</p>
                    <p><span><FiPhoneCall size="1rem" color="rgb(177, 150, 0)"></FiPhoneCall></span>+91 9898024771</p>
                    <p><span><MdEmail size="1rem" color="rgb(177, 150, 0)"></MdEmail></span>aasthaprojectsamd@gmail.com</p>
                    <p><span><FaInstagramSquare size="1rem" color="rgb(177, 150, 0)"></FaInstagramSquare></span>@aasthaprojectsamd</p>
                    <p><span><FaFacebookSquare size="1rem" color="rgb(177, 150, 0)"></FaFacebookSquare></span>@aasthaprojectsamd</p>
                </div>
                <div className="footer-links">
                    <header>links</header>
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/about">about us</NavLink>
                    <NavLink to="/projects/ongoing">projects</NavLink>
                    <NavLink to="/contact">contact us</NavLink>
                </div>
                <div></div>
            </div>
            <div className="lower-footer"></div>
        </div>
    )
}

export default Footer 
