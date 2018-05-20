// ESTILOS
import './app.scss';
// COMPONENTS
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Router, Link } from 'react-router-dom'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Layout from './components/Layout';
import HomePage from './components/Home';
// import AboutPage from './components/about/AboutPage';
// import ContactPage from './components/contact/ContactPage';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';


import Home from './components/Home';
import Login from './components/Login';


render((
  <BrowserRouter>
    {/* <App /> */}
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      {/* <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/> */}
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

// render((
//   <BrowserRouter>
//     <Route path="/" component={Layout}>
//       {/* <IndexRoute component={HomePage}/> */}
//       <Route path="/login" component={LoginPage}/>
//     </Route>
//   </BrowserRouter>
// ), document.getElementById('root'));


// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={HomePage}/>
//       <Route path="/login" component={LoginPage}/>
//     </Route>
// </Router>),
//   document.getElementById('root')
// );
