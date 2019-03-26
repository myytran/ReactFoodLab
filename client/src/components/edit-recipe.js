import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default class EditRecipe extends Component {
    constructor(props) {
      super(props);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onDateChanged = this.onDateChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          recipe_name: ' ' ,
          category: ' ',
          notes: ' ',
          startDate: new Date()

        };
    
    }
      componentDidMount() {
        axios.get('/recipe/edit/' +this.props.match.params.id)
          .then(response => {
        this.setState({
          recipe_name: response.data.recipe_name,
          category: response.data.category,
          notes: response.data.notes,
          startDate: response.data.startDate
        })
      })
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
          const obj = {
            recipe_name: this.state.recipe_name,
            category: this.state.category,
            notes: this.state.notes,
            startDate: this.state.startDate
          };
          axios.post('/recipe/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            this.props.history.push('/dashboard');
        }


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