import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
          <div id="header">
            <nav>
              <ul>
                <li><NavLink className="nav_link" to="/"> Home </NavLink></li>
                <li><NavLink className="nav_link" to="/events"> Events </NavLink></li>
              </ul>
            </nav>

            <div>
              <img src="event.jpg" alt="" />
              <span>Be a guest at your next party.</span>
            </div>
          </div>
        )
    }

}