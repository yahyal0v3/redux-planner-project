import React, { Component } from 'react';
import { connect } from 'react-redux'

import TaskForm from './TaskForm';
import Event from './Event'
import Task from './Task';

class Planner extends Component {

  event = this.props.events.find(event => event.id === parseInt(this.props.match.params.id))

  render() {
    debugger
    return (
      <div id="planner">
        <Event show={true} event={this.event} />
        <TaskForm event_title={this.event.title} event_id={this.event.id} />
        <div className="list">
          <h2>Tasks</h2>
          <section className="flexJustify">
            {this.event.tasks.map(task => <Task key={task.id} task={task} />)}
          </section>
        </div>
      </div>
    )
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