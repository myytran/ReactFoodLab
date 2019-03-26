import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default class EditRecipe extends Component {
    
  render() {
    return (
      <div style={{ marginTop: 10 }}>
     <h3 align="center">UPDATE RECIPE</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label> Recipe Name: </label>
            <input type="text" className="form-control" value={this.state.recipe_name} onChange={this.onChangeRecipeName} />
      </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory} />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <input type="text" className="form-control" value={this.state.notes} onChange={this.onChangeNotes} />
        </div>
        <div className="form-group">
          <label>Select Date</label>
          <DatePicker dateformat="HH:mm" selected={this.state.startDate} defaultValue={null} onChange={this.onDateChanged} isClearable={true}   />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Update Recipe" />
        </div>
    </form>
  </div>
    )
  }
}