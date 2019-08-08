import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Router from './routes/Router';
import store from './store';

const config = require('../../config.json');

ReactGA.initialize(config.googleAnalytics || process.env.GA);
ReactGA.pageview('/');

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
);
