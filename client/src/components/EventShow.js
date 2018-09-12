import React from 'react'

const EventShow = ({event, countdown}) => {
    debugger
    return (
        <div className="container">
            <h1>{countdown}</h1>
            <h3>{event.title}</h3>
            <h3>{event.deadline}</h3>        
            <p>{event.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default EventShow