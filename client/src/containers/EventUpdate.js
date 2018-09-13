import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEvent } from '../actions/actions'

class EventUpdate extends Component {

    event = this.props.events.find(event => event.id === parseInt(this.props.match.params.id, 10))
    
    state = {
        deadline: this.event.deadline, 
        title: this.event.title,
        description: this.event.description
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = event => {
          event.preventDefault()
          debugger
          updateEvent(this.state)
      } 

    render() {
        const {deadline, title, description} = this.state

        return (
            <div className="row fullForm tealRow" id="formRow">
                <section>
                    <h2>Update Event</h2>
                    <form onSubmit={this.handleSubmit}>
                    <p>
                        <label for="deadline">Deadline</label>
                        <input type="datetime-local" name="deadline" value={deadline} onChange={this.handleChange} />
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
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      events: state.eventsState.events,
    }
  }

  export default connect(mapStateToProps)(EventUpdate);