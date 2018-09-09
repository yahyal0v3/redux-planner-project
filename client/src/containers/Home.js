import React, {Component} from 'react';

import { createTimer } from '../actions/actions'
import { connect } from 'react-redux'

import About from '../components/About';
import WhatToDo from '../components/WhatToDo';
import EventForm from './EventForm';

class Home extends Component {

  deadlineSample = () => {
    let today = new Date()
    let inTwoDays = new Date()
    inTwoDays.setDate(today.getDate()+2)
    debugger
    return inTwoDays.getTime()
  }

  componentDidMount() {
    debugger
    this.interval = setInterval(this.props.createTimer(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

   render() {

      return (
        <div className="Home">
          <About />
          <WhatToDo countdown={this.props.countdown}/>
          <EventForm />
        </div>
      )
    }
  }

const mapStateToProps = ({countdown}) => ({countdown})

const mapDispatchToProps = dispatch => {
  return {
    createTimer: () => dispatch(createTimer(this.deadlineSample)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);