import React from 'react'

const EventCard = ({event}) => {
    return (
        <div>
            <h1>{event.deadline}</h1>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
        </div>
    )
}

export default EventCard