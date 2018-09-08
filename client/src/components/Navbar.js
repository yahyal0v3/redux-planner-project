import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="navbar">
            <h1>Party Planner</h1>
            <nav>
            <ul>
                <li><NavLink className="nav_link" to="/"> Home </NavLink></li>
                <li><NavLink className="nav_link" to="/events"> Events </NavLink></li>
                <li><a href="#secondRow"> How To </a></li>
                <li><a href="#thirdRow"> Start Planning </a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar