import { combineReducers } from "redux"
import cuid from 'cuid'
export const cuidFn = cuid
 
const rootReducer = combineReducers({
  eventsState: eventsReducer,
  tasksState: tasksReducer,
})
 
export default rootReducer
 
function tasksReducer(state = {
  tasks: [],
  loading: false
  }, action) {
  switch (action.type) {

    case "LOAD_TASK_REQUEST":
      return {...state, loading: true} 
    case "ADD_TASK":
      state.tasks.push(action.task)
      return state
    case "ADD_TASKS":
      //action.payload.map(task => task['id'] = cuidFn())
      return {tasks: action.payload, loading: false}    
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
    case "LOAD_EVENT_REQUEST":
      return {...state, loading: true} 
    case "ADD_EVENTS":
      //action.payload.map(event => event['id'] = cuidFn())
      return {events: action.payload, loading: false}    
    case "DELETE_EVENT":
        state.filter(event => event.id !== action.id)
        return state
 
    default:
      return state
  }
}

