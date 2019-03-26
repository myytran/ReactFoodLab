import React, { Component } from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      recipe_name: ' ',
      category: ' ',
      notes: ' ',
      startDate: new Date()
    };

}
onChangeRecipeName(e) {
      this.setState({
        recipe_name: e.target.value
      });
    }
    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      })
    }
    onChangeNotes(e) {
      this.setState({
        notes: e.target.value
      })
    }
    onDateChanged(date) {
      this.setState({
        startDate: date
      });
    }
  onSubmit(e) {
    e.preventDefault();
    const recipe ={
      recipe_name: this.state.recipe_name,
      category: this.state.category,
      notes: this.state.notes,
      startDate: this.state.startDate
    };
   
      }

render() {
    return (
      <div className= "create-recipe">
        <h3>Add a new recipe</h3>
        <br></br>

        <ul>
          <li><Link to={'/dashboard'}>Back to Homepage</Link></li>
          </ul>
          <br></br>
          <form onSubmit={this.onSubmit}>
            <div className="create-form-group">
              <label>Recipe Name: </label>
                <input type="text" className="form-control" value={this.state.recipe_name} onChange={this.onChangeRecipeName} />
            </div>
                <div className="create-form-group">
                  <label>Category: </label>
                  <input type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory} />
                </div>
                <div className="create-form-group">
                  <label>Notes: </label>
                  <input type="text" className="form-control" value={this.state.notes} onChange={this.onChangeNotes} />
                </div>
                <div className="create-form-group">
                  <label>Select Date: </label>
                  <DatePicker selected={this.state.startDate} onChange={this.onDateChanged}  />
                </div>
                <div className="create-form-group">
                  <input type="submit" value="Add Recipe" className="submit-recipe-btn"  />
                </div>
              </form>
        </div>


    )
  }
}

export default CreateRecipe;