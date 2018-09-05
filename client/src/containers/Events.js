import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EventCard from '../components/EventCard';
// import { } from '../actions/eventss'

export default class Events extends Component {

  render() {
    return (
      <div>
        <h2>Events</h2>
        <section>
              {/* {events.map(event => <EventCard />)} */}
        </section>
      </div>
    );
  }
}

// const mapStateToProps = ({events}) => ({events})

// export default connect(mapStateToProps)(Events);