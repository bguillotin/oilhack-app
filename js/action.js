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

const setScrolling = (isScrolling) => {
    return {
        type: ACTION_TYPES.SET_SCROLLING,
        isScrolling,
    }
}

const setVideoList = (videoList, nbVideo) => {
    return {
        type: ACTION_TYPES.SET_VIDEO_LIST,
        videoList,
        nbVideo,
    }
}

const setColor = (color) => {
    return {
        type: ACTION_TYPES.SET_COLOR,
        color,
    }
}

const setPosition = (position) => {
    return {
        type: ACTION_TYPES.SET_POSITION,
        position,
    }
}

export {
    setVersion,
    setVideoList,
    setStickyHeader,
    setColor,
    setPosition,
    setScrolling,
}