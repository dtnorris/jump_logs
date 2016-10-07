import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import jump from './jump';
import { reducer as formReducer } from 'redux-form';

const formReducers = {
  form: formReducer
}

let rootReducer = combineReducers({
  routing,
  jump,
  formReducers
});

export default rootReducer;

