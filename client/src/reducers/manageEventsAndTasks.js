import { combineReducers } from "redux"
import cuid from 'cuid'
export const cuidFn = cuid
 
const rootReducer = combineReducers({
  events: eventsReducer,
  tasks: tasksReducer
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
  events: [],
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