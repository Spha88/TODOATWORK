import * as actionTypes from '../actions/actionTypes';

const initialState = {
    openModal: false,
    response: false
}

const editTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                openModal: true,
                response: false
            }

        default: return state;
    }

}


export default editTaskReducer;