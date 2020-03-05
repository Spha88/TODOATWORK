import * as actionTypes from '../actions/actionTypes';

const initialState = {
    openModal: false,
    response: false,
    editMode: false,
    taskTitle: '',
    taskDetails: '',
    editKey: ''
}

const editTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL: return openModal(state);
        case actionTypes.CLOSE_MODAL: return closeModal(state, action);
        case actionTypes.ADDED_TASK: return addTask(state);
        case actionTypes.EDIT_TASK_START: return editTaskStart(state, action);
        case actionTypes.EDIT_TASK_CONTENT: return editingTaskContent(state, action);
        case actionTypes.EDIT_TASK_SAVE: return editTaskSave(state);
        default: return state;
    }
}
const openModal = (state) => {
    return { ...state, openModal: true, response: false }
}
const closeModal = (state) => {
    return {...state, openModal: false, response: false, taskTitle: '', taskDetails: '' }
}
const addTask = (state) => {
    return { ...state, response: true, taskTitle: '', taskDetails: '' }
}
const editTaskStart = (state, action ) => { //Open the modal with details of task to be edited
    let taskToEdit = {...action.tasks[action.key]};
    return {
        ...state,
        taskTitle: taskToEdit.title,
        taskDetails: taskToEdit.details,
        editKey: action.key,
        editMode: true
    }
}
const editingTaskContent = (state, action) => { //updates state when the form inputs changed
    switch (action.name) {
        case 'title': return {...state, taskTitle: action.value};
        case 'details':return {...state, taskDetails: action.value};
        default: return state;
    }
}
const editTaskSave = (state) => { //reset state defaults
    return {
        ...state,
        taskTitle: '',
        taskDetails: '',
        editKey: '',
        editMode: false,
        response: false 
    }
}
export default editTaskReducer;