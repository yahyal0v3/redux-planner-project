import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Event from './Event'
// import Tasks from '../containers/Tasks';

class Planner extends Component {

   render() {
    debugger
      return (
        <div className="planner">
          <h1>Plan Event</h1>
          <Event eventId={this.props.match.params} />
          <TaskForm />
          {/* <Tasks /> */}
        </div>
      );
    }
  }



export default Planner;