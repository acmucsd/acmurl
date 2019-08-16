import {GET_URLS} from './types';
const axios = require('axios');

export const getUrls = () => (dispatch) => {
  axios.get('http://localhost:3000/get-all-urls')
      .then((res) => dispatch({
        type: GET_URLS,
        payload: res.data,
      }));
};

/**
 * Removes parametrized prefix from a url.
 * @param {string} url
 * @param {string} prefix
 * @return {string} the truncated url
 */
function removePrefix(url, prefix) {
  if (!url) return '';
  if (!prefix) return url;
  const hasPrefix = url.indexOf(prefix) === 0;
  return hasPrefix ? url.substr(prefix.length) : url.toString();
}

export const getDisplayUrl = (url) => {
  url = removePrefix(url, 'https://');
  url = removePrefix(url, 'http://');
  url = removePrefix(url, 'www.');
  return url;
};
