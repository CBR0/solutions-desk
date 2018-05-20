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
    to: '/dashboard/schedule'
  },
  {
    icone: 'today',
    to: '/schedule'
  },
  {
    icone: 'assignment',
    to: '/chamados'
  },
  {
    icone: 'group',
    to: '/usuarios'
  },
  {
    icone: 'help',
    to: '/help',
    bottomAction: true
  },
  {
    icone: 'person',
    to: '/perfil',
    bottomAction: true
  },
  {
    icone: 'settings',
    to: '/configuracoes',
    bottomAction: true
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
          {menuItems.filter(function(item) {return  !item.bottomAction }).map(menuItem =>
            <Link className={"item " + (this.state.active === menuItem ? 'selecionado': '' ) } to={menuItem.to} onClick={this._handleClick.bind(this, menuItem)}>
              <i className="material-icons">{menuItem.icone}</i>
            </Link>
          )}

          <span className="flex"></span>

          {menuItems.filter(function(item) {return  item.bottomAction }).map(menuItem =>

            <Link className={"item " + (this.state.active === menuItem ? 'selecionado': '' ) } to={menuItem.to} onClick={this._handleClick.bind(this, menuItem)}>
              <i className="material-icons">{menuItem.icone}</i>
            </Link>
          )}
        </div>

      </header>
    )
  }
}
