import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { ACTION_TYPES } from './constants/action-types';
import { fromJS } from 'immutable'; 

// INITIAL STATE.
const initialState = fromJS({
    version: undefined,
    videoList: [],
    isStickyHeader: false,
});

// REDUCERS.
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
        
        case ACTION_TYPES.SET_STICKY_HEADER:
            return {
                ...state,
                isStickyHeader: action.isStickyHeader,
            }
        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}