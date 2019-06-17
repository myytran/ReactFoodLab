import {ADD_RECIPE, DELETE_RECIPE, FETCH_RECIPE} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/recipe';

export const createRecipe = ({recipe_name, category, ingredients, notes, date}) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {recipe_name, category, ingredients, notes, date})
        .then(response =>{
            dispatch(createRecipeSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const createRecipeSuccess = (data) => {
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

export const deleteRecipeSuccess = id => {
    return{
        type: DELETE_RECIPE,
        payload: {
            id
        }
    }
}

export const deleteRecipe = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/delete/${id}`)
        .then(response => {
            dispatch(deleteRecipeSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};


export const fetchRecipes = (recipes) => {
    return {
        type: FETCH_RECIPE,
        recipes
    }
};

export const fetchAllRecipes = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(response => {
            dispatch(fetchRecipes(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};