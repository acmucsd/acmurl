import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  bottom: 1vw;
  color: #22ACEA;
  display: inline-block;
  font-family: 'Nunito';
  font-size: calc(1.75em + .5vw);
  padding: .5em;
  position: fixed;
  right: 5vw;
`;

const TitleComponent = ({
  text,
  ...props
}) => {
  return (
    <Title>{text}</Title>
  )
}

TitleComponent.propTypes = {
  text: PropTypes.string
}

export default TitleComponent;