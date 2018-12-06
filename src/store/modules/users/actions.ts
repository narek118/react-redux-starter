import * as constants from './constants';
import { user } from '../../schema';
import { ApiAction, CALL_API, Id } from '../../common';

export const fetchUsers = (): ApiAction => ({
  [CALL_API]: {
    types: [
      constants.FETCH_USERS_REQUEST,
      constants.FETCH_USERS_SUCCESS,
      constants.FETCH_USERS_FAILURE
    ],
    endpoint: `/users`,
    schema: [user]
  }
});

export const fetchCurrentUser = (id: Id): ApiAction => ({
  [CALL_API]: {
    types: [
      constants.FETCH_CURRENT_USER_REQUEST,
      constants.FETCH_CURRENT_USER_SUCCESS,
      constants.FETCH_CURRENT_USER_FAILURE
    ],
    endpoint: `/users/${id}`,
    schema: user
  }
});
