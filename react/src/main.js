import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './components/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let reactAppRender = element => {
  ReactDOM.render(
    <Root store={store} history={history} />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('react-app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
