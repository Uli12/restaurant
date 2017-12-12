import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import MenuItem from './components/MenuItem';
import { Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
  <Navbar />
  <Switch>
    <Route exact path='/' component={ Menu } />
    <Route exact path='/about' component={ About } />
    
    <Route component={ NoMatch} />
  </Switch>
  </Segment>
  
);



export default App;
// if the root route is rendered, render the Home component
