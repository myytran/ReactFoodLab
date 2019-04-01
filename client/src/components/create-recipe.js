import {Link} from 'react-router-dom';



import React, { Component } from 'react';

export default class Create extends Component {
    handleReset = () => {
        this.setState({
            name: '',
            category: '',
            ingredients: '',
            notes: '',
            date: new Date()
        });

    };
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Recipe</h3>
                <form>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input type="text" className="form-control"/>
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