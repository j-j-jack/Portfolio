import { combineReducers } from 'redux';
import navReducer from './navReducer';
import contactedReducer from './contactedReducer';
import lightModeReducer from './lightModeReducer';

export default combineReducers({
    nav: navReducer,
    contacted: contactedReducer, 
    lightMode: lightModeReducer
});