import React, { Component } from 'react';
import axios from 'axios';
import DislayData from './display-data';




export class RecipeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {recipe: []};
    
  };


  componentDidMount() {
    axios.get('/recipe/dashboard/')
      .then(response => {
          this.setState({ recipe: response.data });
      })
      
      .catch(function (error) {
        console.log(error);
      })
      
  }


  DisplayDataFunction() {
    return this.state.recipe.map(function(object, i) {
      return <DislayData obj= {object} key = {i} />;
    });
  }

  render() {
    return (
    <div>
        <h3 align="center">Recipe List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <tbody>

            <tr>
              <th>Recipe</th>
              <th>Category</th>
              <th>Notes</th>
              <th>Date</th>
              <th colSpan="2">Action</th>
            </tr>
            {this.DisplayDataFunction()}
          </tbody>
        </table>
      </div>
    );
  }
}


export default RecipeIndex;