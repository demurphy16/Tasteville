import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';

function App() {
  return (
    <Layout>
      <Switch>

        <Route path='/login'>
          {/* login */}
          <Login />
        </Route>

        <Route path='/register'>
          {/* register */}
          <h3>Register</h3>
        </Route>

        <Route path='/'>
          {/* container */}
          <h3>Container</h3>
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
