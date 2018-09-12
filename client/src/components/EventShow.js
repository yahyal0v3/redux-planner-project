import React from 'react'

const EventShow = ({event, countdown, deadline}) => {
    debugger
    return (
        <div class="row secondRow" id="eventShow">
          <section>
            <h1>{event.title}</h1>
            <h3 className="darkBlue">{countdown}</h3>
            <h3>{deadline}</h3>        
            <p>{event.description}</p>
            <button>Edit</button>
            &nbsp;
            <button>Delete</button>
          </section>
        </div>
    )
}

export default EventShow