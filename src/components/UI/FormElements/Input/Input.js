import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    return (
        <div className={classes.InputGroup}>
            <label>{props.title}</label>
            <input onChange={props.changed} name="title"/>
        </div>
    );
}

export default input;