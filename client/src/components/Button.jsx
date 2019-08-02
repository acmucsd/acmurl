import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: #22ACEA;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito';
  font-size: calc(.75em + .5vw);
  margin: 1em;
  padding: .5em;
  transition-duration: .5s;
  width: calc(13em + .5vw);
  
  :focus {
    outline: 0;
  }

  :hover {
    box-shadow: none;
  }
`;

const ButtonComponent = ({
  onClick,
  text,
  ...props
}) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default ButtonComponent;