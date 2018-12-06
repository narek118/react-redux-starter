import { Dispatch as ReduxDispatch } from 'redux';
import { Schema } from 'normalizr';

import { entities, errorMessage, users } from './modules';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'CALL_API';

export type Id = number;

export type ApiAction = {
  [CALL_API]: {
    types: [string, string, string];
    endpoint: string;
    method?: string;
    body?: object;
    schema?: Schema;
  };
  meta?: object;
};

export type StoreState = {
  entities: entities.State;
  errorMessage: errorMessage.State;
  users: users.State;
};

export type Dispatch = ReduxDispatch<any>;
