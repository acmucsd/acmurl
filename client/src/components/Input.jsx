import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  background-color: #F4F4F4;
  border: 0;
  border-radius: 10px;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.1);
  color: #333333;
  font-size: calc(1.75em + .5vw);
  height: 60px;
`;

const InputComponent = ({
  name,
  value,
  handleChange,
  placeHolder,
  ...props
}) => {
  return (
    <Input
      id={props.name}
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  )
}

InputComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string
}

export default InputComponent;
