import React,{useEffect,useRef, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logo from '../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
function Header({openMenu}) {
    const [active,setActive] = useState(1);
    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0);
        })
    }, [])
    return (
        <nav className="header" ref={headerRef}>
            <NavLink to="/">
            <div className="logo">
                <img src={logo}></img>
            </div>
            </NavLink>
            <div className="link">
                <li className={active===1?"active-nav":""} onClick={()=>{setActive(1)}}><NavLink to="/">home</NavLink></li>
                <li className={active===2?"active-nav":""} onClick={()=>{setActive(2)}}><NavLink to="/about">about us</NavLink></li>
                <li className={active===3?"active-nav menu-mega no-hover":"menu-mega no-hover"}>
                    projects
                    <ul className="project-list-nav">
                        <li onClick={()=>{setActive(3)}}><NavLink to="/projects/ongoing">ongoing</NavLink></li>
                        <li onClick={()=>{setActive(3)}}><NavLink to="/projects/upcoming">upcoming</NavLink></li>
                        <li onClick={()=>{setActive(3)}}><NavLink to="/projects/delivered">delivered</NavLink></li>
                    </ul>
                </li>
                <li className={active===4?"active-nav":""} onClick={()=>{setActive(4)}}><NavLink to="/contact">contact us</NavLink></li>
            </div>
            <div className="hamburgur" onClick={()=>{openMenu()}}><GiHamburgerMenu size="2rem" color="white"></GiHamburgerMenu></div>
        </nav>
    )
}

export default Header
