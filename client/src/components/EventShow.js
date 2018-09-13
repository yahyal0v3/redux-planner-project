import React from 'react'

const EventShow = ({event, countdown, deadline, prepared, handleDelete}) => {
    return (
        <div class="row orangeRow" id="eventShow">
          <section>
            <h1>{event.title}</h1>
            {prepared === null ? <h3 className="darkBlue">{countdown}</h3> : <h3 className="darkBlue">{prepared}</h3>}
            <h3>{deadline}</h3>        
            <p>{event.description}</p>
            {prepared === null ? <button>Edit</button> : null}
            &nbsp;
            <button onClick={handleDelete}>Delete</button>
          </section>
        </div>
    )
}

export default EventShow