import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getUrls } from '../actions/listActions';

const List = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const ListContainer = ({
  urls,
  ...props
}) => {
  useEffect(() => {
    props.getUrls();
  });

  if (!urls) return <ListItem></ListItem>
  const items = urls.map((url) => {
    return (
      <ListItem
        key = {uuid()}
        shortURL = {url.shorturl}
        longURL = {url.longurl}
        description = {url.description}
      />
    )
  })
  return (
    <List>
      { items }
    </List>
  )
}

ListContainer.propTypes = {
  urls: PropTypes.array
}

const mapStateToProps = state => ({
  urls: state.list.urls,
});

export default connect(mapStateToProps, { getUrls })(ListContainer);