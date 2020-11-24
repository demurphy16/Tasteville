import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  return (
    <Layout>
      <Switch>

        <Route path='/login'>
          {/* login */}
          <Login handleLogin={handleLogin} />
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
