import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';
import CreateRecipe from './create-recipe';
import EditRecipe from './edit-recipe';
import RecipeIndex from './recipe-index';



export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }


  render() {
        // only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log Out</button>
            );
        }
        return (
            <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                User: {this.props.name}
                {logOutButton}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={'/create'} className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/index'} className="nav-link">Index</Link>
                    </li>
                  </ul>
                </div>
              </nav> <br/>
              <h2>Welcome to React CRUD Tutorial</h2> <br/>
              <Switch>
                <Route exact path='/create' component={ CreateRecipe } />
                <Route path='/edit/:id' component={ EditRecipe } />
                <Route path='/index' component={ RecipeIndex } />
              </Switch>
            </div>
          </Router>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        loggedIn: state.auth.currentUser !== null
    };
    
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));