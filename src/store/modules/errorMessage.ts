import { AnyAction } from 'redux';

// Action key which is responsable for resetting the error message.
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export type State = string | null;

const DEFAULT_STATE: State = null;

// Updates error message to notify about the failed fetches.
export const reducer = (state = DEFAULT_STATE, action: AnyAction) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};
