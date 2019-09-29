import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    font-weight: bold;
    margin: 0;
    padding: 5px 10px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: calc(.7em + .5vw);
    margin: 0;
    padding: 5px 10px;
  }

  .lg-view {
    display: inline-block;
  }

  .sm-view {
    display: none;
  } 

  @media screen and (max-width: 700px) {
    .lg-view {
      display: none;
    }

    .sm-view {
      display: inline-block;
    } 
  }
`;

const ListItemComponent = ({
  shortURL,
  longURL,
  description,
  ...props
}) => {
  return (
    <ListItem>
      <a href={longURL}>
        <h1 className="lg-view">acmurl.com/{shortURL}</h1>
        <h1 className="sm-view">/{shortURL}</h1>
        <p>{longURL}</p>
        <p>{description}</p>
      </a>
    </ListItem>
  )
}

ListItemComponent.propTypes = {
  shortURL: PropTypes.string,
  longURL: PropTypes.string,
  description: PropTypes.string
}

export default ListItemComponent;