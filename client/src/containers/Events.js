import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventCard from '../components/EventCard'
import { fetchEvents } from '../actions/actions'

class Events extends Component {

  componentDidMount() {
    debugger
    this.props.fetchEvents()
  }

  render() {
    return (
      <div>
        <h2>Events</h2>
        <section id="events">
              {/* {this.props.events.map(event => <EventCard event={event} />)} */}
              <EventCard />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)