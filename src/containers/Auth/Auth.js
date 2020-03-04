import React, { Component } from 'react';
import classes from './Auth.module.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Auth extends Component {
    state = { 
        userName: '',
        passord: ''
    }
    render() { 
        const styles = {'margin': '0 0 8px 0'};
        return ( 
            <div className={classes.Auth}>
                <h2>Log in</h2>
                <form className={classes.Form}>
                    <TextField
                        error = {false}
                        id="outlined-secondary"
                        label="User Name"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        style={styles}
                    />
                    <TextField
                        error = {false}
                        id="outlined-secondary"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        style={styles}
                    />

                    <Button variant="contained" color="primary" component="span">Login</Button>
                    
                </form>
            </div>
         );
    }
}
 
export default Auth;