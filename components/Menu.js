import React from 'react'
import { Link } from 'react-router-dom'

import {MDCRipple} from '@material/ripple';
import {MDCIconToggle} from '@material/icon-toggle';

import './menu.scss';
// The Header creates links that can be used to navigate
// between routes.
const menuItems = [
  {
    icone: 'record_voice_over',
    to: '/'
  },
  {
    icone: 'today',
    to: '/schedule'
  }
]
export default class Menu extends React.Component {
  constructor() {
      super();
      this.state = {
          active: 'about'
      }
      this._handleClick = this._handleClick.bind(this);
  }
  componentDidMount() {
    Array.prototype.forEach.call(
        document.querySelectorAll(".jujubinha"),
        function(element, index) {
            let ripple = MDCRipple.attachTo(element);
        }
    );
    // const teste = new MDCRipple(document.querySelector('.jujubinha'));
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }
  render() {
    const activeStyle = { color: '#ff3333' };
    return (
      <header className="container-menu">
        <div className="container-logo"></div>

        <div className="lista-menu">
          {menuItems.map(menuItem =>
            <div className={"item " + (this.state.active === menuItem ? 'selecionado': '' ) }>
              <Link to={menuItem.to} className="material-icons" onClick={this._handleClick.bind(this, menuItem)}>{menuItem.icone}</Link>
            </div>
          )}

          <span className="flex"></span>

          <div className="item">
            <Link to='/roster' className="material-icons ripple" onClick={this._handleClick.bind(this, this)}>settings</Link>
          </div>
        </div>

      </header>
    )
  }
}
