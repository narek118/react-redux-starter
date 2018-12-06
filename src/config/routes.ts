import App from '../pages/App';
import Users from '../pages/App/pages/Users';
import CurrentUser from '../pages/App/pages/CurrentUser';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/users',
        component: Users,
        exact: true
      },
      {
        path: '/users/:id',
        component: CurrentUser
      }
    ]
  }
];

export default routes;
