import React from 'react';
import classes from './SubmitBtn.module.css';
import AddBtn from '../AddBtn/AddBtn';

const submitBtn = () =>  {

    return (
        <button className={classes.SubmitBtn} type="submit">Add Task <AddBtn /></button>
    );

}

export default submitBtn;