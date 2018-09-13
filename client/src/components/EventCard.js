import React from 'react'
import { NavLink } from 'react-router-dom'

const EventCard = ({event, countdown, deadline, prepared}) => {

    return (
        <div className="container">
            {prepared === null ? <h1>{countdown}</h1> : <h1>{prepared}</h1>}
            <h3><NavLink to={`/party-planner/${event.id}`}>{event.title}</NavLink></h3>
            <h3>{deadline}</h3>        
            <p>{event.description}</p>
            {prepared === null ? <button>Edit</button> : null}
            <button>Delete</button>
        </div>
    )
}

export default EventCard