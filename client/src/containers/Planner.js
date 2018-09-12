import React, { Component } from 'react';
import { connect } from 'react-redux'
import { findEvent } from '../actions/actions'

import TaskForm from './TaskForm';
import Event from './Event'
// import Tasks from '../containers/Tasks';

class Planner extends Component {

  state = {
    event: this.props.events.find(event => event.id === parseInt(this.props.match.params.id))
  }

  render() {
    debugger
    return (
      <div className="planner">
        <h1>Plan Event</h1>
        <Event params={this.props.match.params} event={this.state.event} />
        <TaskForm />
        {/* <Tasks /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventsState.events,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       findEvent: () => dispatch(findEvent(this.props.match.params.id))
//   }
// }



export default connect(mapStateToProps)(Planner);