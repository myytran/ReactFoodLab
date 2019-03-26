import axios from 'axios';
import {API_BASE_URL} from '../config';




export const FETCH_RECIPES = 'fetch_recipes';


export function fetchRecipes() {
    const request = axios.get(`${API_BASE_URL}/recipe`);
    return {
        type: FETCH_RECIPES,
        payload: request
    };
}
