import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #22ACEA;
  border: 0;
  border-radius: 15px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito';
  font-size: calc(.75em + .5vw);
  margin: 1em;
  padding: .5em;
  width: calc(13em + .5vw);
  
  :focus {
    outline: 0;
  }
`;

const handleClick = function() {
  alert("button clicked!");
}

export default (props) => (
  <Button onClick={handleClick}>{props.text}</Button>
);