import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

type Props = {
  route?: RouteConfig;
};

const App = (props: Props) => {
  const { route = {} } = props;

  return <div style={{ padding: '20px' }}>{renderRoutes(route.routes)}</div>;
};

export default App;
