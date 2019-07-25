import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';
import RedirectPage from '../pages/RedirectPage';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/form" component={FormPage} />
        <Route path="/:id" component={RedirectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
