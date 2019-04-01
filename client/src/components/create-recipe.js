import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangestartDate = this.onChangestartDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            recipe_name: '',
            category: '',
            ingredients: '',
            notes: '',
            startDate: new Date()

        }
}

onChangeRecipeName(e) {
    this.setState({
      recipe_name: e.target.value
    });
}

onChangeCategory(e) {
    this.setState({
        category: e.target.value
         });
}

onChangeIngredients(e) {
    this.setState({
        ingredients: e.target.value
        });
}

onChangeNotes(e) {
    this.setState({
        notes: e.target.value
        });
}

onChangestartDate(date) {
    this.setState({
      startDate: date
    });

}

onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.recipe_name}, ${this.state.category}, and ${this.state.startDate}`)
    this.setState({
        recipe_name: '',
        category: '',
        ingredients: '',
        notes: '',
        startDate: new Date()
    })
  }
    
//Reset button function
handleReset = () => {
        this.setState({
            recipe_name: '',
            category: '',
            ingredients: '',
            notes: '',
            startDate: new Date()
        });

    };


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Recipe Name:  </label>
                        <input type="text" className="form-control" value={this.state.recipe_name} onChange={this.onChangeRecipeName}/>
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory}/>
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input type="text" className="form-control" value={this.state.ingredients} onChange={this.onChangeIngredients}/>
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input type="text" className="form-control" value={this.state.notes} onChange={this.onChangeNotes}/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <DatePicker selected ={this.state.startDate} onChange={this.onChangestartDate}  />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Recipe" className="btn btn-primary"/>
                        <input type="submit" value="Reset" className="btn btn-primary" onClick={this.handleReset}/>
                    </div>
                    <div className="form-group">
                    <Link to={'/dashboard'} className="btn btn-primary">Back to dashboard</Link>
                    </div>
                </form>
            </div>
        )
    }
}