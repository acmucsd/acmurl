import React from 'react';
import { GlobalStyle } from '../global-styles';
import ListItem from '../components/ListItem';

const HomePage = (props) =>  {
  return (
    <div>
      <GlobalStyle/>
      <ListItem
        shortURL = "fb"
        originalURL = "facebook.com/acmucsd"
        description = "ACM's Facebook Page for announcements on events and projects"
      />
    </div>
  );
}

export default HomePage;
