import React, { Component   } from 'react'
import { createEvent } from '../actions/actions'
import $ from 'jquery'

export default class EventForm extends Component {
    
    slide = 1
    
    state = {
        deadlineDate: "", 
        deadlineTime: "",
        title: "",
        description: ""
    }
 
    handleKeyPress = event => {
        if (event.key === 'Enter') {
            ++this.slide
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {deadlineDate, deadlineTime, title, description} = this.state
        let data = {title: title, description: description, deadline: deadlineDate + "T" + deadlineTime}
        createEvent(data)
        this.slide = 1
        this.setState({deadlineDate: "", deadlineTime: "", title: "", description: ""})
    } 

    render() {
        const token = $('meta[name="csrf-token"]').attr('content');

        function renderForm() {
            const {deadlineDate, deadlineTime, title, description} = this.state
            if (this.slide === 1) { 
                return (
                    <div className="formFragment">
                        <h2>Make a Deadline</h2>
                        <input type="date" name="deadlineDate" value={deadlineDate} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
                        <input type="time" name="deadlineTime" value={deadlineTime} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />       
                    </div>
                )
          
            } else if (this.slide === 2) {
                return (
                    <div className="formFragment">
                        <h2>Create an Event Title</h2>
                        <input type="text" name="title" value={title} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />       
                    </div>
                )

            } else if (this.slide === 3) {
                return (
                    <div className="formFragment">
                        <h2>Describe the Occasion</h2>
                        <textarea name="description" value={description} onKeyPress={this.handleKeyPress} onChange={this.handleChange} rows="6" cols="50"></textarea>       
                    </div>
                )
            
            } else if (this.slide === 4) {
                return (
                    <div className="fullForm">
                        <h2>Is This Your Event?</h2>
                        <form onSubmit={this.handleSubmit} encType="form-data">
                          <input type="hidden" name="authenticity_token" value={token} />
                          <p>
                            <label>Deadline</label>
                            <input type="date" name="deadlineDate" value={deadlineDate} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
                            <input type="time" name="deadlineTime" value={deadlineTime} onKeyPress={this.handleKeyPress} onChange={this.handleChange} /> 
                          </p><br />
                          <p>
                            <label for="title">Title</label>
                            <input type="text" name="title" value={title} onChange={this.handleChange} />
                          </p><br />
                          <p>
                            <label for="description">Description</label>
                            <textarea name="description" value={description} onChange={this.handleChange} rows="4" cols="50"></textarea>
                          </p><br />                        
                          <input type="submit" value="Submit" />
                        </form>
                    </div>
                )
            }
        }

        return (
            <div className="row tealRow" id="formRow">
              <section>
                {renderForm.call(this)}
              </section>
            </div>
        )
    }

    
}