import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchEventShow } from '../actions/actions'
import { fetchEvents } from '../actions/actions'

import TaskForm from './TaskForm';
import Event from './Event'
import Tasks from './Tasks';

class Planner extends Component {


  //event = this.props.events.find(event => event.id === parseInt(this.props.match.params.id, 10))

  componentDidMount() {
    debugger
    this.props.dispatch(fetchEvents())
  }

  // findEvent = () => {
  //   debugger
  //   if (this.props.events.length === 0) {
  //     return fetchEventShow(parseInt(this.props.match.params.id, 10))
  //   } else {
  //     return this.props.events.find(event => event.id === parseInt(this.props.match.params.id, 10))
  //   }
  // }


  render() {

    if (this.props.events.length === 0 || this.props.loading === true) {
      return (
        <div className="row">
          <section>
            <div className="loader"></div>
          </section>
        </div>
      )    
    } else {
      const event = this.props.events.find(event => event.id === parseInt(this.props.match.params.id, 10))
      return (
        <div id="planner">
          <Event show={true} event={event} />
          <TaskForm event={event} />
  
          <Tasks event_tasks={event.tasks} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  //debugger
  return {
    events: state.eventsState.events,
    loading: state.eventsState.loading
  }
}


export default connect(mapStateToProps)(Planner);