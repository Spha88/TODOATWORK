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
                dispatch(loadTask());
                return true;
            })
            .catch(error => console.log(error));
    }
}