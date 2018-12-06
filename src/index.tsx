import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'redux-react-hook';
import 'semantic-ui-css/semantic.min.css';

import configure from './store/configure';
import routes from './config/routes';
import PendingNavDataLoader from './PendingNavDataLoader';

export const store = configure();

ReactDOM.render(
  <StoreProvider value={store}>
    <Router>
      <PendingNavDataLoader>{renderRoutes(routes)}</PendingNavDataLoader>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
