import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

class Menu extends Component {
  render() {
    return(
      <div className="menu-wrapper">
        <nav>
          <ul>
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/login'}>Log In</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
};
export default Menu;