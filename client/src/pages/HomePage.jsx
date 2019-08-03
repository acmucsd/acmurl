import React from 'react';
import { GlobalStyle } from '../global-styles';
import List from '../containers/List';

const HomePage = (props) =>  {
  const object = [{shorturl:'goog', 
    longurl:'google.com', 
    description:'a description'}, 
    {shorturl: 'yah', 
    longurl:'yahoo.com', 
    description:'another description'}];
  return (
    <div>
      <GlobalStyle />
      <List 
        urls={object}
      />
    </div>
  );
}

export default HomePage;
