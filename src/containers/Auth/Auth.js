import React, { Component } from 'react';
import classes from './Auth.module.css';

class Auth extends Component {
    state = { 
        userName: '',
        passord: ''
    }
    render() { 
        return ( 
            <div className={classes.Auth}>
                <h2>Log in</h2>
            </div>
         );
    }
}
 
export default Auth;