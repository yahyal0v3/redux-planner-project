import React from 'react'

const EventCard = ({event}) => {
    return (
        <div>
            {/* <h1>{event.deadline}</h1>
            <h3>{event.title}</h3>
            <p>{event.description}</p> */}
            <div>
                <h1>Deadline</h1>
                <h3>Title</h3>
                <p>Description</p>
            </div>
            <div>
                <h1>Deadline</h1>
                <h3>Title</h3>
                <p>Description</p>
            </div>
            <div>
                <h1>Deadline</h1>
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
    )
}

export default EventCard