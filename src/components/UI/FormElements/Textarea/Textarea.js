import React from 'react';
import classes from './Textarea.module.css';

const textarea = (props) => {
    return (
        <div className={classes.FormGroup}>
            <label>{props.title}</label>
            <textarea onChange={props.changed} name="details" value={props.value}></textarea>
        </div>
    );
}

export default textarea;