import * as actionTypes from '../actions/actionTypes';


const initialState = {
    loading: false,
    tasks: null,
    errorLoading: null
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_TAKS_START: 
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                errorLoading: false
            }
        case actionTypes.LOADING_TASK_COMPLETE: 
            return {
                ...state,
                loading: false,
                errorLoading: false
            }
        case actionTypes.LOADING_TASK_FAILED:
            return {
                ...state,
                loading: false,
                errorLoading: true
            }
        default: return state;
    }
}

export default taskListReducer;