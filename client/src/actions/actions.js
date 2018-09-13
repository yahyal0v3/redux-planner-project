import fetch from 'isomorphic-fetch'


export function createEvent(data) {
    debugger
    return fetch('http://localhost:3001/events', {
        method: 'POST',
        credentials: "same-origin",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(resp => {
        debugger
        resp.json()})
    .then(event => console.log(event))

}

export function fetchEvents() {
    // debugger
    return (dispatch) => {
        dispatch({ type: 'LOAD_EVENT_REQUEST' })
        return fetch('http://localhost:3001/events')
        .then(resp => {
            console.log(resp.status)
            console.log(resp.statusText)
            // debugger
            resp.json()})
        .then(events => dispatch({type: "ADD_EVENTS", payload: events}))
        .catch(error => {
            // debugger
            console.log(error)})
    }
}

export function countdown(event_deadline) {
    let now = new Date().getTime()
    let deadline = new Date(event_deadline).getTime()
    let distance = deadline - now
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
    let countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    return countdown
}

// export function fetchTasks(id) {
//     return fetch(`http://localhost:3001/events/${id}/tasks`)
//         .then(response => response.json())
//     }
// }

export function createTask(data) {
    return (dispatch) => {
        dispatch({ type: 'LOAD_TASK_REQUEST' }) 
        return fetch(`http://localhost:3001/tasks`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)})
        .then(resp => resp.json())
        .then(task => dispatch({type: "ADD_TASK", task: task}))
        .catch(error => console.log(error))
    }
}

export function updateEvent(id) {
    return fetch(`http://localhost:3001/events/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(resp => resp.json())
}

export function updateTaskStatus(id) {
    return (dispatch) => {
        dispatch({ type: 'LOAD_TASK_REQUEST' }) 
        return fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(task => dispatch({type: "PATCH_TASK", id: task.id}))
        .catch(error => console.log(error))
    }
}

export function deleteEvent(id) {
    return (dispatch) => {
        dispatch({ type: 'LOAD_EVENT_REQUEST' }) 
        return fetch(`http://localhost:3001/events/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(event => dispatch({type: "DELETE_EVENT", id: event.id}))
        .catch(error => console.log(error))
    }
}

export function deleteTask(id) {
    return (dispatch) => {
        dispatch({ type: 'LOAD_TASK_REQUEST' }) 
        return fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(task => dispatch({type: "DELETE_TASK", id: task.id}))
        .catch(error => console.log(error))
    }
}