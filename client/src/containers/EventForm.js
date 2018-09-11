import React, {Component} from 'react'
import { createEvent } from '../actions/actions'

export default class EventForm extends Component {
    
    state = {
        slide: 1,
        deadline: "", 
        title: "",
        description: ""
    }
 
    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.setState({ slide: this.state.slide + 1 })
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let stateCopy = {...this.state}
        delete stateCopy.slide
        debugger
        console.log(stateCopy)
        createEvent(stateCopy)
    } 

    render() {

        function renderForm(state, handleChange, handleKeyPress, handleSubmit) {
            if (state.slide === 1) { 
                return (
                    <div className="formFragment">
                        <h2>Make a Deadline</h2>
                        <input type="datetime-local" name="deadline" value={state.deadline} onKeyPress={handleKeyPress} onChange={handleChange} />       
                    </div>
                )
          
            } else if (state.slide === 2) {
                return (
                    <div className="formFragment">
                        <h2>Create an Event Title</h2>
                        <input type="text" name="title" value={state.title} onKeyPress={handleKeyPress} onChange={handleChange} />       
                    </div>
                )

            } else if (state.slide === 3) {
                return (
                    <div className="formFragment">
                        <h2>Describe the Occasion</h2>
                        <textarea name="description" value={state.description} onKeyPress={handleKeyPress} onChange={handleChange} rows="6" cols="50"></textarea>       
                    </div>
                )
            
            } else if (state.slide === 4) {
                return (
                    <div id="fullForm">
                        <h2>Is This Your Event?</h2>
                        <form onSubmit={handleSubmit}>
                          <p>
                            <label for="deadline">Deadline</label>
                            <input type="datetime-local" name="deadline" value={state.deadline} onChange={handleChange} />
                          </p><br />
                          <p>
                            <label for="title">Title</label>
                            <input type="text" name="title" value={state.title} onChange={handleChange} />
                          </p><br />
                          <p>
                            <label for="description">Description</label>
                            <textarea name="description" value={state.description} onChange={handleChange} rows="4" cols="50"></textarea>
                          </p><br />                        
                          <input type="submit" value="Submit" />
                        </form>
                    </div>
                )
            }
        }

        return (
            <div className="row" id="thirdRow">
              <section>
                {renderForm(this.state, this.handleChange, this.handleKeyPress, this.handleSubmit)}
              </section>
            </div>
        )
    }

    
}