import React, { Component } from 'react';

export default class CreateRecipe extends Component {
    render() {
        return (
            <div style={{margin: 30}}>
                <h2>Add New Recipe</h2>
                <form>
                    <div className="form-group">
                        <label> Recipe name:  </label>
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
                        <input type="submit" value="Create Recipe" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}