import React, { Component } from 'react'
import EventCard from '../components/EventCard'
import EventShow from '../components/EventShow'
import { countdown } from '../actions/actions'

class Event extends Component {

    state = {
        countdown: ""
    }

    deadline = new Date(this.props.event.deadline).toLocaleString()

    prepared = null

    componentDidMount() {
        this.checkPreparedness()
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

    checkPreparedness = () => {
        let passedDeadline = new Date(this.props.event.deadline) <= new Date() ? true : false
        let completedTasks = this.props.event.tasks.every(task => task.completed === true)
        if (passedDeadline && completedTasks) {
            this.prepared = true
        } else if (passedDeadline && completedTasks === false) {
            this.prepared = false
        }
    }

    render() {
        function renderEvent() {
            if (!this.props.params) {
                return <EventCard event={this.props.event} deadline={this.deadline} 
                countdown={this.state.countdown} prepared={this.prepared} />
            } else if (!!this.props.params) {
                return <EventShow event={this.props.event} deadline={this.deadline} 
                countdown={this.state.countdown} prepared={this.prepared} />
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