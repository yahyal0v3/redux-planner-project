import { combineReducers } from "redux"
import cuid from 'cuid'
export const cuidFn = cuid
 
const rootReducer = combineReducers({
  eventsState: eventsReducer,
  tasksState: tasksReducer,
})
 
export default rootReducer
 
function tasksReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TASK":
      // const task = {
      //     id: cuidFn(), deadline: action.datetime, description: action.text, eventId: action.eventId
      //   }
      action.task['id'] = cuidFn()
      return [...state, action.task]
 
    case "DELETE_TASK":
      state.filter(task => task.id !== action.id)
      return state



    default:
      return state
  }
}
 
function eventsReducer(state = {
  events: [
    {countdown: "", deadline: "2018-09-14T12:59", title: "Surprise Party", description: "Ut enim ad minim veniam, quis nostrud exercitation… laboris nisi ut aliquip ex ea commodo consequat."},
    {countdown: "", deadline: "2018-09-25T18:59", title: "Graduation", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {countdown: "", deadline: "2018-09-11T15:00", title: "CockTail Party", description: "Duis aute irure dolor in reprehenderit in voluptat…elit esse cillum dolore eu fugiat nulla pariatur."}
  ],
  loading: false
}, action) {
  switch (action.type) {
    case "LOAD_EVENTS_REQUEST":
      return {...state, loading: true} 
    case "ADD_EVENTS":
      return {events: action.events, loading: false}
      
    case "CREATE_EVENT":
      action.event['id'] = cuidFn()
      return [...state, action.event]
    case "SHOW_EVENT":
      return state.find(event => event.id === action.id)
    case "DELETE_EVENT":
        state.filter(event => event.id !== action.id)
        return state
 
    default:
      return state
  }
}

