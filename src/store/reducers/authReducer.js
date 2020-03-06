import * as actionTypes from '../actions/actionTypes';

const initialState = {
    signIn: false
}

const authReducer = (state = initialState, action ) => {
        switch (action.type) {
            case actionTypes.AUTH_START:
                    return {
                        ...state,
                        signIn: false
                    }
            case actionTypes.AUTH_SIGN_IN: 
                    return {
                        ...state,
                        signIn: true
                    }
            case actionTypes.LOGOUT: 
                return {
                    ...state, signIn: false
                }
            default: return state;
        }
}


export default authReducer;