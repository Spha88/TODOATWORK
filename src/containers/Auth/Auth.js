import React, { Component } from 'react';
import classes from './Auth.module.css';

import { connect } from 'react-redux';
import { auth } from '../../store/actions/index';

import TextField from '@material-ui/core/TextField';
import SubmitBtn from '../../components/UI/SubmitBtn/SubmitBtn'
import { Redirect, Route } from 'react-router-dom';

class Auth extends Component {

    state = {
        name: '',
        password: '',
        isSignUp: false
    }

    onSignInHandler = (e) => {
        e.preventDefault();
        let userInfo = {
            name: this.state.name,
            password: this.state.password,
            isSignUp: this.state.isSignUp ? true : false
        }
        this.props.onSubmit(userInfo);
    }

    onSignUphandler = () => {
        this.setState({isSignUp: !this.state.isSignUp});
    }

    onInputChangeHandler = (e) => {
        if(e.target.type === 'text') {
            let updateInput = { ...this.state.name };
            updateInput = e.target.value;
            this.setState({name: updateInput})
        }

        if(e.target.type === 'password' ) {
            let updateInput = { ...this.state.password };
            updateInput = e.target.value;
            this.setState({password: updateInput})
        }
        
    }
    
    render() { 
        const styles = {'margin': '0 0 8px 0'};
        if(this.props.signedIn){
            return (
                <Route>
                    <Redirect to="/task-list" />
                </Route>
            );
        }
        return ( 
            <div className={classes.Auth}>
                <h2 className={classes.LogInHeading}>Log in</h2>
                <p>{this.props.signedIn ? 'You have logged in' : 'you need to log in'}</p>
                <form className={classes.Form} onSubmit={this.onSignInHandler}>
                    <TextField
                        onChange = { this.onInputChangeHandler }
                        error = {false}
                        id="outlined-secondary"
                        label="User Name"
                        variant="outlined"
                        value={this.state.name}
                        color="primary"
                        fullWidth
                        style={styles}
                    />
                    <TextField
                        onChange = { this.onInputChangeHandler }
                        error = {false}
                        id="outlined-adornment-password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        style={styles}
                    />
                    <SubmitBtn onClick={this.onSignInHandler} label={this.state.isSignUp ? 'Sign Up' : 'Log in'} /> or 
                    <span style={{ cursor: "pointer" }} onClick={this.onSignUphandler}>{this.state.isSignUp ? ' Log in' : ' Sign Up'}</span>
                </form>
            </div>
         );
    }
}
const mapStateToProps = state => {
    return {
        signedIn: state.auth.signIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (userInfo) => dispatch(auth(userInfo))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);