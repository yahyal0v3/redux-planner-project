import React, { Component } from 'react';
import { createTask } from '../actions/actions'

export default class TaskForm extends Component {

  state = {
    completed: false,
    deadline: "", 
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
      debugger
      createTask(this.state)
  } 

  render() {
    const {deadline, description} = this.state

    return (
      <div className="row fullForm tealRow" id="formRow">
        <section>
          <h3>Add Tasks for {this.props.event.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label for="deadline">Deadline</label>
              <input type="datetime-local" name="deadline" value={deadline} onChange={this.handleChange} 
              max={this.props.event.deadline} />
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