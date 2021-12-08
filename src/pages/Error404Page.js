import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404Page() {
    return (
        <div className="error404">
            <h1 className="main">Oops!</h1>
            <h1>page not found</h1>
            <h2>try these links</h2>
            <div className="links-404">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </div>
        </div>
    )
}

export default Error404Page
