import fetch from 'isomorphic-fetch'

export function createComment(data) {
    console.log(JSON.stringify(data))
      return fetch('http://localhost:3001/comments', {
          method: 'POST',
          mode: 'CORS',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(res => {
          return res;
      }).catch(err => err);
  }

export const createEvent = eventData => {
    return fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(eventData)
    })

    // return {
    //     type: 'CREATE_EVENT',
    //     event
    // }
}

export const createTask = task => {
    return {
        type: 'CREATE_TASK',
        event
    }
}

export const deleteEvent = event => {
    return {
        type: 'DELETE_EVENT',
        event
    }
}

export const deleteTask = task => {
    return {
        type: 'DELETE_TASK',
        event
    }
}

export function fetchEvents() {
    return (dispatch) => {
      dispatch({ type: 'LOAD_EVENTS_REQUEST' })
      return fetch('http://localhost:3001/events')
        .then(response => response.json())
        .then(events => dispatch({ type: 'ADD_EVENTS', events}))
    }
}

export function fetchEventShow(id) {
    return (dispatch) => {
      dispatch({ type: 'LOAD_EVENT_SHOW_REQUEST' })
      return fetch(`http://localhost:3001/events/${id}`)
        .then(response => response.json())
        .then(events => dispatch({ type: 'SHOW_EVENT', events}))
    }
}