import { ACTION_TYPES } from './constants/action-types';

const setVersion = (version) => {
    return {
        type: ACTION_TYPES.SET_VERSION,
        version,
    }
}

const setStickyHeader = (isStickyHeader) => {
    return {
        type: ACTION_TYPES.SET_STICKY_HEADER,
        isStickyHeader,
    }
}

const setVideoList = (videoList) => {
    return {
        type: ACTION_TYPES.SET_VIDEO_LIST,
        videoList,
    }
}

export {
    setVersion,
    setVideoList,
    setStickyHeader,
}