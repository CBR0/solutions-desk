import React from 'react'
import { Link } from 'react-router-dom'

import {MDCRipple} from '@material/ripple';
import './menu.scss';
// The Header creates links that can be used to navigate
// between routes.
const Menu = () => (
  <header className="container-menu">
    <nav>
      <ul>
        <Link to='/' className="mdc-button foo-button">Home</Link>
        <Link to='/roster' className="mdc-button">Roster</Link>
        <Link to='/schedule' className="mdc-button">Schedule</Link>
      </ul>
    </nav>
    <button className="mdc-button">gente</button>
  </header>
)

export default Menu
