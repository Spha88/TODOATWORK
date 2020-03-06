import React from 'react';
import classes from './SubmitBtn.module.css';
import AddBtn from '../AddBtn/AddBtn';

const submitBtn = (props) =>  {

    return (
        <button className={classes.SubmitBtn} onClick={props.click}> {props.label} <AddBtn /></button>
    );

}

export default submitBtn;