import React, { Component } from 'react'
import { countdown } from '../actions/actions'

export default class Task extends Component {

    state = {
        countdown: ""
    }

    deadline = new Date(this.props.task.deadline).toLocaleString()

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

    function checkCompleteness() {
        let passedDeadline = new Date(this.props.task.deadline) <= new Date() ? true : false
        if (passedDeadline && this.props.task.completed) {
            return <h1 className="completed">Completed</h1>
        } else if (passedDeadline && this.props.task.completed === false) {
            return (
                <React.Fragment>
                    <h1 className="incompleted">Incomplete!</h1>
                    <h3>Late by {this.state.countdown}</h3>
                </React.Fragment>
            )
        } else {
            return <h1>{this.state.countdown}</h1>          
        }
    }
    
    return (
        <div className="container">
            {checkCompleteness.call(this)}
            <h3>{this.deadline}</h3>        
            <p>{this.props.task.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
  }
}