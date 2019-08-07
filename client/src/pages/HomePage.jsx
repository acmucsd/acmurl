import React from 'react';
import { GlobalStyle } from '../global-styles';
import List from '../containers/List';

const HomePage = (props) =>  {
  return (
    <div>
      <GlobalStyle/>
      <List/>
    </div>
  );
}

export default HomePage;