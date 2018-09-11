import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="navbar">
            <h1>Party Planner</h1>
            <nav>
            <ul>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/events"> Events </NavLink></li>
                <li><a href="#secondRow"> How To </a></li>
                <li><a href="#thirdRow"> Start Planning </a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar