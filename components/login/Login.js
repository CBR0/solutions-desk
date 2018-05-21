import React from 'react';
import { Link } from 'react-router-dom'

// import Navigation from './Navigation';

export default class Login extends React.Component{
  render(){
    return(
        <div>
            <h1>LOGIN MANO</h1>
            <Link to='/dashboard' className="mdc-button foo-button">Entrar</Link>

        </div>
    );
  }
}
