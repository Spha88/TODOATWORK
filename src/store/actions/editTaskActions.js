import * as actionTypes from './actionTypes';
import axios from 'axios';

export const openModal = () => {
    return {
        type: actionTypes.OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export const addedTask = () => {
    return {
        type: actionTypes.ADDED_TASK
    }
}

export const addTask = (data, loadTask ) => {
    return dispatch => {
        axios.post( 'tasks.json', data )
            .then( res => {
                dispatch(addedTask());
                dispatch(closeModal());
                dispatch(loadTask());
                return true;
            })
            .catch(error => console.log(error));
    }
}

export const editTaskStart = (key, tasks) => { //sends information to store about the task to be edited
    console.log(key);
    return  {
        type: actionTypes.EDIT_TASK_START,
        key: key,
        tasks: tasks
    }
}

export const editingTaskContent = (e) => { //update the store everytime an input field changes
    return dispatch => {
        dispatch({
            type: actionTypes.EDIT_TASK_CONTENT,
            name: e.target.name,
            value: e.target.value
        });
    }
}

export const editTaskSave = (key, data, load) => { //send the changes to the database and load tasks
    return dispatch => {
        axios.patch(`tasks/${key}/.json`, data )
                .then(res => {
                    dispatch(closeModal());
                    dispatch({ type: actionTypes.EDIT_TASK_SAVE });
                    dispatch(load());

                })
                .catch(error => console.log(error))
    }
}

export const deleteTask = (key, load) => {
    return dispatch => {
        axios.delete(`tasks/${key}.json` )
            .then(res => {
                dispatch(load());
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
}