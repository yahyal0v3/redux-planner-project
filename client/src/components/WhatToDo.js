import React from 'react'

const WhatToDo = props => {

    return (
        <div className="row orangeRow" id="howTo">
            <section>
            <h2>What To Do</h2>
            <div>
                <figure>
                    <img src="https://i.imgur.com/nhnv86W.png" alt="" width="150" />
                    <figcaption>Create an Event</figcaption>
                </figure>
                <figure>
                    <img src="https://i.imgur.com/UO3ZflI.png" alt="" width="100" />
                    <figcaption>Plan it Out</figcaption>
                </figure>
                <figure>
                    <span>{props.countdown}</span>
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