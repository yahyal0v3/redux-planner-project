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
    case "UPDATE_TASK":
      let tasksEdit = state.tasks.filter(task => task.id !== action.task.id)
      tasksEdit.push(action.task)
      debugger
      return {tasks: tasksEdit, loading: false} 
    case "ADD_TASK":
      //stateCopy = {...state}
      state.tasks.push(action.task)
      return {...state, loading: false} 
    case "ADD_TASKS":
      //action.payload.map(task => task['id'] = cuidFn())
      return {tasks: action.tasks}    
    case "DELETE_TASK":
        state.tasks.filter(task => task.id !== action.id)
        return {...state, loading: false} 



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
      return {events: action.payload, loading: false}    
    case "DELETE_EVENT":
      let eventsEdit = state.events.filter(event => event.id !== action.id)
      return {events: eventsEdit, loading: false} 
 
    default:
      return state
  }
}

