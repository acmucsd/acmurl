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
    font-size: 2.5em;
    margin: 0;
    padding: 5px 10px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    margin: 0;
    padding: 5px 10px;
  }
`;

export default ListItem;