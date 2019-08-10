import { GlobalStyle } from '../global-styles';
import React from 'react';
import Title from '../components/Title';

const RedirectPage = (props) =>  {
  return (
    <div>
      <GlobalStyle/>
      <Title text="Redirecting..."/>
    </div>
  );
}

export default RedirectPage;
