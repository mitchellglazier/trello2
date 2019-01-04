import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NoMatch from './Components/NoMatch';
import Navbar from './Components/Navbar';

const App = () => (
  <Fragment>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={NoMatch} />
      </Switch>
  </Fragment>
);

export default App;
