import { ADD_RECIPE, DELETE_RECIPE, FETCH_RECIPE } from './types';
import axios from 'axios';

const apiURL = 'http://localhost:3000/recipe';

export const addRecipe = ({ recipe_name, category, ingredients, notes, date}) => {
    return (dispatch) => {
        return axios.post(`${apiURL}/add`, {recipe_name, category, ingredients, notes, date})
            .then(response => {
                dispatch(addRecipeSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const addRecipeSuccess = (data) => {
    return {
        type: ADD_RECIPE,
            payload: {
                _id: data._id,
                recipe_name: data.recipe_name,
                category: data.category,
                ingredients: data.ingredients,
                notes: data.notes,
                date: data.date
            }
    }
};

export const deleteRecipe = id => {
    return (dispatch) => {
        return axios.get(`${apiURL}/delete/${id}`)
            .then(response => {
                dispatch(deleteRecipeSuccess(response.data))
            })
                .catch(error => {
                    throw(error);
                });
    };
};

export const deleteRecipeSuccess = id => {
    return {
        type: DELETE_RECIPE,
            payload: {
                id
            }
    }
}

export const fetchAllRecipes = () => {
    return (dispatch) => {
        return axios.get(`${apiURL}/dashboard`)
            .then(response => {
                dispatch(fetchRecipe(response.data))
            })
                .catch(error => {
                    throw(error);
                });
    };      
};

export const fetchRecipe = (recipes) => {
    return {
        type: FETCH_RECIPE,
        recipes
    }
};