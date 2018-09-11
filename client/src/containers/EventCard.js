import React, { Component } from 'react'
import { countdown } from '../actions/actions'
import { NavLink } from 'react-router-dom'

class EventCard extends Component {

    state = {
        countdown: ""
    }

    componentDidMount() {
        this.interval = setInterval(this.countdownTimer, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    countdownTimer = () => {
        this.setState({
            countdown: countdown(this.props.event.deadline)
        })
    }

    render() {
        const {event} = this.props
        return (
            <div className="container">
                <h1>{this.state.countdown}</h1>
                <h3><NavLink to={`/party-planner/${event.id}`}>{event.title}</NavLink></h3>
                <h3>{event.deadline}</h3>        
                <p>{event.description}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default EventCard