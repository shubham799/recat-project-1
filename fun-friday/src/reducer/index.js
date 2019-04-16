import { combineReducers } from 'redux';
import login from './login';
import registerdUsers from './register'

const funFridayApplication = combineReducers({login,registerdUsers});

export default funFridayApplication;