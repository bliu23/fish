import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Room from './room/Room';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/">
            <p>This is the home page</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
