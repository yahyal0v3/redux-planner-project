import React, { Component } from 'react'
import { connect } from 'react-redux'
import Event from './Event'
import { fetchEvents } from '../actions/actions'

class Events extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <div className="list">
        <h2>Events</h2>
        <section className="flexJustify">
            {this.props.events.map(event => <Event event={event} />)}
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

const mapDispatchToProps = (dispatch) => {
  return {
      fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)