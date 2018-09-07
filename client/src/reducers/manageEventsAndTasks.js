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
 
function eventsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_EVENTS":
      return action.events
    case "CREATE_EVENT":
      // const event = {
      //     id: cuidFn(), title: action.title, deadline: action.datetime, description: action.text
      //   }
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