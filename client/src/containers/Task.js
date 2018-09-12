import React, { Component } from 'react'
import { countdown } from '../actions/actions'

export default class Task extends Component {

    state = {
        countdown: ""
    }

    deadline = new Date(this.props.task.deadline).toLocaleString()

    incompleteCheck = new Date(this.props.task.deadline) <= new Date() ? "Incomplete!" : null


    componentDidMount() {
        this.interval = setInterval(this.countdownTimer, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    countdownTimer = () => {
        this.setState({
            countdown: countdown(this.props.task.deadline)
        })
    }

  render() {
    debugger
    return (
        <div className="container">
            <h1>{this.incompleteCheck}</h1>
            {this.incompleteCheck ? <h3>Late by {this.state.countdown}</h3> : <h1>{this.state.countdown}</h1>}
            <h3>{this.deadline}</h3>        
            <p>{this.props.task.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
  }
}