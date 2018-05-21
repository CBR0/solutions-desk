import React from 'react'
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount() {

    Array.prototype.forEach.call(
        document.querySelectorAll(".mdc-button"),
        function(element, index) {
            let ripple = MDCRipple.attachTo(element);
        }
    );
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }
  render() {
    return (
      <div>

        <h1>HOME PAGE </h1>

        <div className="mdc-text-field mdc-text-field--box">
          <input type="text" id="my-text-field" className="mdc-text-field__input" />
          <label className="mdc-floating-label" for="my-text-field">Hint text</label>
          <div className="mdc-line-ripple"></div>
        </div>
        <div>
          <Link to='/login' className="mdc-button foo-button">FAZER LOGIN</Link>
        </div>


      </div>
    )
  }
}

