import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './Components/Landing/Landing';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
