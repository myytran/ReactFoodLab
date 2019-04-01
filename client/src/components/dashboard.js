import React from 'react';
import {connect} from 'react-redux';
import {  Link } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';



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
            
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                User: {this.props.name}
                {logOutButton}
                <br></br>
                <Link to={'/create'} className="navbar-brand">Create a recipe</Link>
                <h2>Dashboard || Index </h2> <br/>
              </nav>
           
              </div>
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