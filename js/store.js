import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { ACTION_TYPES } from './constants/action-types';
import { fromJS } from 'immutable'; 

const initialState = fromJS({
    version: undefined,
    videoList: [],
});

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_VERSION:
            return {
                ...state,
                version : action.version,
            }
        case ACTION_TYPES.SET_VIDEO_LIST:
            return {
                ...state,
                videoList: action.videoList,
            }
            
        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}