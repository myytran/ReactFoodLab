import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RegistrationPage from './registration-page';
import Contact from './contact';
import './menu.css';

class LoginMenu extends Component {
  render() {
    return(
      <div className="menu-wrapper">
        <nav>
          <ul>
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
};
export default LoginMenu;