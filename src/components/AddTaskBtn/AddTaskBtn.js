import React from 'react';
import classes from './AddTaskBtn.module.css';
import AddBtn from '../UI/AddBtn/AddBtn';


const addTaskBtn = (props) => {
    return (
        <li className={classes.AddTask} onClick={props.openAddTaskModal}>
            <header><h5>Add New Task</h5> <AddBtn /></header>
        </li>
    );
}

export default addTaskBtn;