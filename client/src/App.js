import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Router exact path="/register" component={Register} />
          <Router exact path="/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
