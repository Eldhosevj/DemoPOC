import { combineReducers } from 'redux';

// eslint-disable-next-line space-infix-ops
const inMystate = 0;
// eslint-disable-next-line default-param-last
function counter(state = inMystate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
// eslint-disable-next-line default-param-last
function name(state = inMystate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return 'amal';
    case 'DECREMENT':
      return 'manu';
    default:
      return state;
  }
}

export default combineReducers({ counter, name });
