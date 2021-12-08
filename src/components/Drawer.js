import React from 'react'
import { NavLink } from 'react-router-dom'
import './drawer.css'

function Drawer({openMenu}) {
    return (
        <nav className="drawer">
            <div className="cross" onClick={()=>{openMenu()}}>x</div>
            <div className="wrapper-nav">
            <li onClick={()=>{openMenu()}}><NavLink to="/">home</NavLink></li>
            <li onClick={()=>{openMenu()}}><NavLink to="/about">about us</NavLink></li>
            <li onClick={()=>{openMenu()}}><NavLink to="/projects/ongoing">ongoing projects</NavLink></li>
            <li onClick={()=>{openMenu()}}><NavLink to="/projects/upcoming">upcoming projects</NavLink></li>
            <li onClick={()=>{openMenu()}}><NavLink to="/projects/delivered">delivered projects</NavLink></li>
            <li onClick={()=>{openMenu()}}><NavLink to="/contact">contact us</NavLink></li>
            </div>
        </nav>
    )
}

export default Drawer
