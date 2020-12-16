import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer, //name (the one before colon) can be anything you want, e.g. 'myCounter: counterReducer'
    isLogged: loggedReducer //shorthand name: 'loggedReducer', is same as 'loggedReducer: loggedReducer'
});

export default allReducers;