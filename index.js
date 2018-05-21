// ESTILOS
import './app.scss';
// COMPONENTS
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Router, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

render((
  <BrowserRouter>
    {/* <App /> */}
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
