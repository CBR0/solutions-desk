import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <div className="container-menu">
    <p>Mano do céu</p>
    <Switch>

      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)


export default Roster
