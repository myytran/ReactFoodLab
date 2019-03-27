import {ADD_RECIPE, DELETE_RECIPE, FETCH_RECIPE} from '../actions/types';

export default function recipeReducer(state = [], action) {
    switch (action.type) {
        case ADD_RECIPE: 
            return [...state, action.payload];
        case DELETE_RECIPE: 
            return state.filter(recipe => recipe._id !== action.payload.id);
        case FETCH_RECIPE: 
            return action.recipes;
            
            default: 
                return state;
    }
}