import * as actionTypes from '../actions/actionTypes';


const initialState = {
    loading: false
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_TAKS_START: 
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}

export default taskListReducer;