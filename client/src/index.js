import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReactGA from 'react-ga';

import Router from './routes/Router';
import store from './store';

ReactGA.initialize('UA-145113197-1');
ReactGA.pageview('/');

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
);
