import React, {Component} from 'react'
import { countdown } from '../actions/actions'

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
        debugger
        this.setState({
            countdown: countdown(this.props.event.deadline)
        })
    }

    render() {
        debugger
        return (
            <div className="container">
                <h1>{this.state.countdown}</h1>
                <h3><a href="#">{this.props.event.title}</a></h3>
                <h3>{this.props.event.deadline}</h3>        
                <p>{this.props.event.description}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default EventCard