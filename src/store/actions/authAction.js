import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSignIn = () => {
    return {
        type: actionTypes.AUTH_SIGN_IN,
    }
}

export const auth = (userInfo) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: userInfo.name,
            password: userInfo.password,
            returnSourceToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpgz2FUYXLUnyUrRglAfXu11tthKDacH4'

        if( userInfo.isSignUp ){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpgz2FUYXLUnyUrRglAfXu11tthKDacH4'
        }

        axios.post( url, authData )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}