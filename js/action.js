import { ACTION_TYPES } from './constants/action-types';

const setVersion = (version) => {
    return {
        type: ACTION_TYPES.SET_VERSION,
        version,
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
    setVideoList
}