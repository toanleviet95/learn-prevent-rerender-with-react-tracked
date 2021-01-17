import { Route } from 'react-router-dom';
import WithCreateContainer from '@/containers/WithCreateContainer';
import WithReactRedux from '@/containers/WithReactRedux';

export default [
  {
    path: "/demo-with-create-container",
    component: WithCreateContainer
  },
  {
    path: "/demo-with-react-redux",
    component: WithReactRedux
  },
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

