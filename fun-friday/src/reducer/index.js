import { combineReducers } from 'redux';
import login from './login';
import register from './register'

const funFridayApplication = combineReducers({login,register});

export default funFridayApplication;