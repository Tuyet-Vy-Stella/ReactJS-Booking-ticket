import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    number: 1,
});

export const store = createStore(rootReducer);