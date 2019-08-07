import {GET_URLS} from '../actions/types';

const initialState = {
  urls: [],
};

/**
 * Assigns urls that will be displayed on the home page.
 * @param {object} state - The previous state of the list of urls
 * @param {object} action - The action to perform
 * @return {object} The updated state of the list of urls
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_URLS:
      return {
        ...state,
        urls: action.payload,
      };
    default:
      return state;
  }
}
