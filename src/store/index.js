import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
    let result;

    console.log(action, store.getState());
    result = next(action);
    console.log(store.getState());

    return result;
};

export default (initialState = {}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
};