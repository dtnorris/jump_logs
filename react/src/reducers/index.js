import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import jump from './jump';

let rootReducer = combineReducers({
  routing,
  jump
});

export default rootReducer;

