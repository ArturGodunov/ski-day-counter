import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
    let result;

    console.group();
    console.log(action, store.getState());
    result = next(action);
    console.log(store.getState());
    console.groupEnd();

    return result;
};

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
};