import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadingTaskStart = () => {
    return {
        type: actionTypes.LOADING_TASKS_START
    }
}
export const loadingTaskComplete = (tasks) => {
    return {
        type: actionTypes.LOADING_TASKS_COMPLETE,
        tasks: tasks
    }
}

export const loadTask = () => {
    return dispatch => {
        dispatch(loadingTaskStart());
        axios.get('tasks.json')
            .then(res => {
                dispatch(loadingTaskComplete(res.data));
            })
            .catch(error => {
                console.log(error.status);
                dispatch({ type: actionTypes.LOADING_TASK_FAILED });
            });
    }
}


