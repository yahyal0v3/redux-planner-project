import React, {Component} from 'react';

import About from '../components/About';
import WhatToDo from '../components/WhatToDo';
import EventForm from './EventForm';

class Home extends Component {
  state = {
    countdown: ""
  }

  componentDidMount() {
      let today = new Date()
      let inTwoDays = new Date()
      debugger
      inTwoDays.setDate(today.getDate()+2)
      this.interval = setInterval(this.timerCountdown(inTwoDays.getTime()), 1000)
    }

  componentWillUnmount() {
      clearInterval(this.interval)
  }

  timerCountdown = (deadline) => {
      let now = new Date()
      let distance = deadline - now
      
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)
      
      let countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      debugger
      this.setState({
          countdown: countdown
      })
      
  }

  render() {

    return (
      <div className="Home">
        <About />
        <WhatToDo countdown={this.state.countdown} />
        <EventForm />
      </div>
    )
  }
}


export default Home