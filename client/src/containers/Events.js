import React, { Component } from 'react'
import { connect } from 'react-redux'
import Event from './Event'
import { fetchEvents } from '../actions/actions'

class Events extends Component {

  componentDidMount() {
    debugger
    this.props.fetchEvents()
  }

  render() {
    debugger
    if (this.props.loading === true) {
      return (
        <div className="row">
          <section>
            <div className="loader"></div>
          </section>
        </div>
    )
    } else {
      return (
        <div className="list">
        <h2>Events</h2>
        <section className="flexJustify">
            {this.props.events.map(event => <Event key={event.id} event={event} />)}
        </section>
      </div>
      )
    }

  }
}

const mapStateToProps = state => {
  debugger
  return {
    events: state.eventsState.events,
    loading: state.eventsState.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
      fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)