import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  background-color: #22ACEA;
  border: 0;
  border-radius: 20px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  cursor: pointer;
  margin: 1em;
  padding: 1em;

  h1 {
    font-family: 'Nunito', sans-serif;
    font-size: calc(2.3em + .5vw);
    margin: 0;
    padding: 5px 10px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: calc(.7em + .5vw);
    /*******font-size: calc(0.25rem + 1.25vw);*******/
    margin: 0;
    padding: 5px 10px;
  }

  .lg-view {
    display: inline-block;
  }

  .sm-view {
    display: none;
  } 

  @media screen and (max-width: 500px) {
    .lg-view {
      display: none;
    }

    .sm-view {
      display: inline-block;
    } 
  }
`

export default (props) => (
  <ListItem>
    <h1 className="lg-view">acmurl.com/{props.shortURL}</h1>
    <h1 className="sm-view">/{props.shortURL}</h1>
    <p>{props.originalURL}</p>
    <p>{props.description}</p>
  </ListItem>
);