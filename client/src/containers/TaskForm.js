import React, { Component } from 'react';
import { createTask } from '../actions/actions'

export default class TaskForm extends Component {

  state = {
    deadlineDate: "", 
    deadlineTime: "", 
    description: "",
    event_id: this.props.event.id
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
      event.preventDefault()
      const {deadlineDate, deadlineTime, description, event_id} = this.state
      let data = {event_id: event_id, description: description, deadline: deadlineDate + "T" + deadlineTime}
      this.props.dispatch(createTask(data))
      this.setState({deadlineDate: "", deadlineTime: "", title: "", description: ""})
  } 

  render() {
    const {deadlineDate, deadlineTime, description} = this.state

    return (
      <div className="row fullForm tealRow" id="formRow">
        <section>
          <h3>Add Tasks for {this.props.event.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Deadline</label>
              <input type="date" name="deadlineDate" value={deadlineDate} onChange={this.handleChange} max={this.props.event.deadline} />
              <input type="time" name="deadlineTime" value={deadlineTime} onChange={this.handleChange} /> 

            </p><br />
            <p>
              <label for="description">Description</label>
              <textarea name="description" value={description} onChange={this.handleChange} rows="4" cols="50"></textarea>
            </p><br />                        
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    )
  }
}