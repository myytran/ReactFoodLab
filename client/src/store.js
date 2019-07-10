import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';
//import rootReducer from './reducers/index';
//import { fetchAllRecipes } from './actions/index';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
       // recipe: rootReducer
       
    }),
    applyMiddleware(thunk));
    
   // store.dispatch(fetchAllRecipes());
// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;