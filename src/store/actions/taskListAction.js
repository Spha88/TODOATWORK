import * as actionsTypes from './actionTypes';


export const loadingTaskStart = () => {
    return {
        type: actionsTypes.LOADING_TAKS_START
    }
}

export const loadTask = () => {
    return dispatch => {
        dispatch(loadingTaskStart());
    }
}


