import React, { Component } from 'react';
import { createTask } from '../actions/actions'

export default class TaskForm extends Component {

  state = {
    deadline: "", 
    description: "",
    event_id: this.props.event_id
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
          <h3>Add Tasks for {this.props.event_title}</h3>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label for="deadline">Deadline</label>
              <input type="datetime-local" name="deadline" value={deadline} onChange={this.handleChange} />
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