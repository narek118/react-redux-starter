import { FETCH_USERS_SUCCESS, FETCH_CURRENT_USER_SUCCESS } from './constants';
import { AnyAction } from 'redux';

import { State } from './types';

export const DEFAULT_STATE: State = {
  list: [],
  current: null
};

const auth = (state = DEFAULT_STATE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: action.response.result
      };

    case FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        current: action.response.result
      };

    default:
      return state;
  }
};

export default auth;
