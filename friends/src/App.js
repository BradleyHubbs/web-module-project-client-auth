import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'


function App() {
  const logout = () => {

  }
  return (
    <Router>

    <div className="App">
      <ul className='nav'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/friends' component={Friends} />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
