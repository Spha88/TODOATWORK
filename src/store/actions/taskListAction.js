import * as actionsTypes from './actionTypes';
import axios from 'axios';

export const loadingTaskStart = () => {
    return {
        type: actionsTypes.LOADING_TAKS_START
    }
}
export const loadingTask = (tasks) => {
    return {
        type: actionsTypes.LOAD_TASKS,
        tasks: tasks
    }
}
export const loadingTaskComplete = () => {
    return {
        type: actionsTypes.LOADING_TASK_COMPLETE
    }
}
export const loadingTaskFailed = () => {
    return {
        type: actionsTypes.LOADING_TASK_FAILED
    }
}
export const loadTask = () => {
    return dispatch => {
        dispatch(loadingTaskStart());
        axios.get('tasks.json')
            .then(res => {
                dispatch(loadingTask(res.data));
                dispatch(loadingTaskComplete())
            })
            .catch(error => {
                console.log(error.status);
                dispatch(loadingTaskFailed());
            });
    }
}


