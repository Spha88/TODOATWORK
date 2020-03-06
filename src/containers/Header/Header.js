import React, { Component } from 'react';
import classes from './Header.module.css';
import SubmitBtn from '../../components/UI/SubmitBtn/SubmitBtn';
import { withRouter, Redirect } from 'react-router-dom';

class Header extends Component {

    state = {
        redierect: false
    }

    logOut = () => {
        console.log('clicked');
        this.setState({redierect: true});
    }

    render() { 
        if(this.state.redierect){
            return <Redirect to="/" />;
        }
        return ( 
            <header className={classes.Header}>
                <h2>Task</h2>
                <SubmitBtn clicked={ () => this.props.history.push('/') } label="Log out" /> 
            </header>
        );
    }
}
 
export default withRouter(Header);
