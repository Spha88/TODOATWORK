import React, { Component } from 'react';
import classes from './Header.module.css';
import SubmitBtn from '../../components/UI/SubmitBtn/SubmitBtn';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/index';

class Header extends Component {

    render() { 

        return ( 
            <header className={classes.Header}>
                <h2>Task</h2>
                { this.props.signIn ? (
                    <Link to="/">
                        <SubmitBtn label="Log out" click={this.props.onLogOut}/>
                    </Link>) : null }
            </header>
        );
    }
}
const mapStateToProps = state => {
    return {
        signIn: state.auth.signIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(logOut())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);
