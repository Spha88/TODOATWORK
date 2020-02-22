import React from 'react';
import classes from './CancelBtn.module.css';

const cancelBtn = (props) => {

    return (
        <button className={classes.CancelBtn} onClick={props.onClick}>x</button>
    );
}

export default cancelBtn;