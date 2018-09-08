import React, {Component} from 'react'
import Navbar from './Navbar'

export default class Header extends Component {
    render() {
        return (
          <div id="header">
            <Navbar />

            <div id="headerImg">
              <img src="http://i68.tinypic.com/jihyjp.jpg" alt="" />
              <p>Be a guest at your next party.</p>
            </div>
          </div>
        )
    }

}