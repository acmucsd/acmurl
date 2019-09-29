import React from 'react';
import { GlobalStyle } from '../global-styles';
import List from '../containers/List';
import { NavLink } from 'react-router-dom'

const HomePage = (props) =>  {
  return (
    <div>
      <GlobalStyle/>
      <h1>ACM URL</h1>
      <p>Coming Soon</p>
      <NavLink to="/form">
        <p>Add a Link</p>
      </NavLink>
      <List/>
    </div>
  );
}

export default HomePage;