import React, {Component} from 'react'
import Navbar from './Navbar'

export default class Header extends Component {
    render() {
        return (
          <div id="header">
            <Navbar />

            <div id="headerImg">
              <img src="events.png" alt="" />
              <span>Be a guest at your next party.</span>
            </div>
          </div>
        )
    }

}