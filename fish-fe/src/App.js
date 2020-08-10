import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Room from './room/Room';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/">
          <p>This is the home page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
