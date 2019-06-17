import React from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/index';
import DisplayData from '../components/display-data';


function RecipeList({ recipes, onDelete }) {
 
   
       return (
           <div>
               {recipes.map(recipe => {
                   return (
                    <DisplayData recipe={ recipe } onDelete={ onDelete } key={ recipe._id } />
                   );
               })}
           </div>
       );
     
}

 

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteRecipe(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);