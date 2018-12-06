import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';
import apiMiddleware from './middleware/api';

const configure = () => {
  const api = apiMiddleware() as any;

  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, api))
  );

  return store;
};

export default configure;
