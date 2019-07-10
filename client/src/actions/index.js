import {ADD_RECIPE, DELETE_RECIPE, FETCH_RECIPE} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/recipes';


export const createRecipe = ({ title, body }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {title, body })
        .then(response =>{
            dispatch(createRecipeSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};
//sync actions
export const createRecipeSuccess = (data) => {
    return {
        type: ADD_RECIPE,
        payload: {
            _id: data._id,
            title: data.title,
            body: data.body
            
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
//async action sends network req to server, then as promise resolves, it fires a sync action with action type and payload
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