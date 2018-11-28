import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { ACTION_TYPES } from './constants/constants';
import { fromJS } from 'immutable'; 

export const actionTypes = {};

const initialState = fromJS({
    version: undefined,
});

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_VERSION:
            return {
                ...state,
                version : action.version,
            }

        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}