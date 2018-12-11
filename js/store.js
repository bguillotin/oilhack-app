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
    isScrolling: false,
    color : "red",
    position: -50,
    nbVideo: 0,
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
                nbVideo: action.nbVideo,
            }
        
        case ACTION_TYPES.SET_STICKY_HEADER:
            return {
                ...state,
                isStickyHeader: action.isStickyHeader,
            }
        case ACTION_TYPES.SET_COLOR: 
            return {
                ...state,
                color: action.color,
            }
        case ACTION_TYPES.SET_POSITION: 
            return {
                ...state,
                position: action.position,
            }
        case ACTION_TYPES.SET_SCROLLING: 
            return {
                ...state,
                isScrolling: action.isScrolling,
            }
        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}