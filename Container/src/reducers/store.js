import { combineReducers } from 'redux'
function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
  
  function name(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return "amal"     
        case 'DECREMENT':
        return "manu"
      default:
        return state
    }
  }
  
  export default combineReducers({counter,name})