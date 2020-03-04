import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userName: 'Spha'
}

const authReducer = (state = initialState, action ) => {
        switch (action.type) {
            case actionTypes.AUTH_START:
                    console.log(actionTypes.AUTH_START);
                    return {
                        ...state,
                        userName: 'zola'
                    }
        
            default: return state;
        }
}


export default authReducer;