import React from 'react'

const EventCard = ({event}) => {
    return (
        <React.Fragment>
            {/* <h1>{event.deadline}</h1>
            <h3>{event.title}</h3>
            <p>{event.description}</p> */}
            <div className="container">
                <h1>16d 12h 10m 9s</h1>
                <h3><a href="#">Title</a></h3>
                <h3>Deadline</h3>        
                <p>Description Duis aute irure dolor in reprehenderit in 
			voluptate velit esse cillum dolore eu fugiat</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className="container">
                <h1>16d 12h 10m 9s</h1>
                <h3><a href="#">Title</a></h3>
                <h3>Deadline</h3>        
                <p>Description reprehenderit in 
			voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <button>Edit</button>&nbsp;
                <button>Delete</button>
            </div>
            <div className="container">
                <h1>16d 12h 10m 9s</h1>
                <h3><a href="#">Title</a></h3>
                <h3>Deadline</h3>        
                <p>Description Duis aute irure dolor in reprehenderit in 
			voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <button>Edit</button>&nbsp;
                <button>Delete</button>
            </div>
        </React.Fragment>
    )
}

export default EventCard