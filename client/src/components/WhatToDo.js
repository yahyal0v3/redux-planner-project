import React from 'react'

const WhatToDo = props => {
    return (
        <div className="row" id="secondRow">
          <section>
          <h2>What To Do</h2>
            <div>
                <figure>
                    <img src="http://i66.tinypic.com/1555509.jpg" alt="" />
                    <figcaption>Create an Event</figcaption>
                </figure>
                <figure>
                    <img src="http://i67.tinypic.com/2n6avj5.jpg" alt="" />
                    <figcaption>Plan it Out</figcaption>
                </figure>
                <figure>
                    {/* <span>{this.props.countdown}</span> */}
                    <span>16d 12h 10m 9s</span>
                    <figcaption>Meet the Deadline</figcaption>
                </figure>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.</p>
		  </section>
        </div>
    )
}

export default WhatToDo