import {GET_URLS} from '../actions/types';

const initialState = {
  urls: [],
};

/**
 * Reducer for list.
 * @param {*} state
 * @param {*} action
 * @return {*}
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
