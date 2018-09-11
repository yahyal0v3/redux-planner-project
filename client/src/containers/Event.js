import React, { Component } from 'react'
import EventCard from '../components/EventCard'
import { countdown } from '../actions/actions'

class Event extends Component {

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

        function renderEvent() {
            if (!!this.props.event) {
                return (
                    <EventCard event={this.props.event} countdown={this.state.countdown} />
                )
            } else if (!!this.props.eventId) {
                return <div></div>
            }
        }

        return (
            <React.Fragment>
                {renderEvent.call(this)}
            </React.Fragment>
        )
    }
}

export default Event