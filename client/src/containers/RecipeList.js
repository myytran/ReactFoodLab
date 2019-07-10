import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deleteRecipe } from '../actions/index';

function RecipeList({ recipes, onDelete }) {
    if(!recipes.length) {
        return (
            <div>
                No recipes, add some!
            </div>
        )
    }


return (
    <div>
        
            return (
                <Post recipes={ recipes } onDelete={ onDelete } key={ recipes._id } />
            );
    
    </div>
    )
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

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(RecipeList);