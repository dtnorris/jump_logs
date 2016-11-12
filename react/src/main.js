import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { browserHistory } from 'react-router';
import routes from './routes';

let reactAppRender = (element) => {
  ReactDOM.render(
    <Root browserHistory={browserHistory} routes={routes} />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('react-app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
