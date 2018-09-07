import fetch from 'isomorphic-fetch'


export const createEvent = data => {
    return fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }).then(resp => {
        debugger
        resp.json()})
    .then(events => console.log(events))

}

export const createTask = task => {
    return {
        type: 'CREATE_TASK',
        task
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
        task
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