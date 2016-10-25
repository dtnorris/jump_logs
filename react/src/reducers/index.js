import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import jump from './jump';
import { reducer as formReducer } from 'redux-form';

let form = formReducer.plugin({});

let rootReducer = combineReducers({
  routing,
  jump,
  form
});

export default rootReducer;

