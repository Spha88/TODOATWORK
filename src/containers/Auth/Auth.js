import React, { Component } from 'react';
import classes from './Auth.module.css';

import { connect } from 'react-redux';
import { auth } from '../../store/actions/index';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Auth extends Component {

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Submit ready')
        this.props.onSubmit();
    }
    
    render() { 
        const styles = {'margin': '0 0 8px 0'};
        return ( 
            <div className={classes.Auth}>
                <h2>Log in</h2>
                <form className={classes.Form} onSubmit={ (e) => this.onSubmitHandler(e) } >
                    <TextField
                        error = {false}
                        id="outlined-secondary"
                        label="User Name"
                        variant="outlined"
                        value={this.props.userName}
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
const mapStateToProps = state => {
    return {
        userName: state.userName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(auth())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);