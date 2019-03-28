import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
//import {fetchAllRecipes} from '../actions/recipe';
import DashHeader from './dash-header';
import RecipeIndex from './recipe-index';



export class Dashboard extends React.Component {
    componentDidMount() {
        //this.props.dispatch(fetchAllRecipes());
    }

    render() {
        return (
            <div className="dashboard">
            <h1>Recipes Index</h1>
            <DashHeader />
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <br></br>
                <div className="RecipeIndex">
              <RecipeIndex />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));