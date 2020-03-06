import React from 'react';
import classes from './SubmitBtn.module.css';
import AddBtn from '../AddBtn/AddBtn';

const submitBtn = (props) =>  {

    return (
        <button className={classes.SubmitBtn} onClick={props.clicked}> {props.label} <AddBtn /></button>
    );

}

export default submitBtn;