//import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const recipeReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_RECIPE': 
            return state.concat([action.data]);
                default: 
                    return state;
    }
}

export default recipeReducer;