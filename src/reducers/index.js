import { combineReducers } from 'redux';
import fetchUserReducer from './fetchUserReducer';
import fetchReposReducer from './fetchReposReducer';

const rootReducer = combineReducers({
   fetchUser: fetchUserReducer,
   fetchRepos:fetchReposReducer
})

export default rootReducer