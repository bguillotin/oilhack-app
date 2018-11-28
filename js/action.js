import { ACTION_TYPES } from './constants/constants';

const setVersion = (version) => {
    return {
        type: ACTION_TYPES.SET_VERSION,
        version,
    }
}

export {
    setVersion,
}