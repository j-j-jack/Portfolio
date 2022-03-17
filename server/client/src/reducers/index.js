import { combineReducers } from 'redux';
import navReducer from './navReducer';
import contactedReducer from './contactedReducer';

export default combineReducers({
    nav: navReducer,
    contacted: contactedReducer
});