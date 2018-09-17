import fetch from 'isomorphic-fetch'

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

//const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

export function createEvent(data) {
    debugger
    return fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(event => console.log(event))
}

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

export function fetchEvents() {
    debugger
    return (dispatch) => {
        dispatch({ type: 'LOAD_EVENT_REQUEST' })
        return fetch('http://localhost:3001/events')
        .then(resp => resp.json())
        .then(events => dispatch({type: "ADD_EVENTS", payload: events}))
        .catch(error => console.log(error))
    }
}

// export function fetchEventShow(id) {
//     debugger
//     return (dispatch) => {
//         dispatch({ type: 'LOAD_EVENT_REQUEST' })
//         return fetch(`http://localhost:3001/events/${id}`, {cache: "no-store"})
//         .then(resp => {
//             debugger
//             return resp.json()})
//         .then(event => {
//             debugger
//             dispatch({ type: 'STOP_LOAD_REQUEST' })
//             return event})
//         .catch(error => console.log(error))
//         }
// }

export function updateEvent(data) {
    return fetch(`http://localhost:3001/events/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
}

export function updateTaskStatus(data, dispatch) {
    debugger
        dispatch({ type: 'LOAD_TASK_REQUEST' }) 
        return fetch(`http://localhost:3001/tasks/${data.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                //'Access-Control-Allow-Methods':'PUT',
                // 'Access-Control-Request-Headers': 'X-Custom-Header',
                // 'Access-Control-Allow-Credentials':true,
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
            debugger
            return resp.json()})
        .then(task => {
            debugger
            return dispatch({type: "UPDATE_TASK", id: task.id})})
        .catch(error => console.log(error))
}

export function deleteEvent(id, dispatch) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"

    dispatch({ type: 'LOAD_EVENT_REQUEST' }) 
    debugger
    return fetch(proxyurl + `http://localhost:3001/events/${id}`, {
        method: 'DELETE',
        // headers: {
        //     Access-Control-Allow-Origin: *
        // },
    })
    .then(resp => {
        console.log(resp.status)
        debugger
        return resp.json()})
    .then(event => {
        debugger
        return dispatch({type: "DELETE_EVENT", id: event.id})})
    .catch(error => console.log(error))
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