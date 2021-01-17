import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import routes, { RouteWithSubRoutes } from '@/routes.config';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        Demo with:
        <ul>
          <li>
            <Link to="/demo-with-create-container">Create Container</Link>
          </li>
          <li>
            <Link to="/demo-with-react-redux">React Redux</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
