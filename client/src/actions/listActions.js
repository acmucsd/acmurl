import {GET_URLS} from './types';
const axios = require('axios');

export const getUrls = () => (dispatch) => {
  axios.get('http://localhost:3000/get-all-urls')
      .then((res) => dispatch({
        type: GET_URLS,
        payload: res.data,
      }));
};
