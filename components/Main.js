import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Roster from './Roster'
import Schedule from './Schedule'
import AbrirChamado from './dashboard/chamado/Chamado'
import { Link } from 'react-router-dom'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dashboard/roster' component={Roster}/>
      <Route path='/dashboard/abrir-chamado' component={AbrirChamado}/>
      <Route path='/dashboard/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default Main
