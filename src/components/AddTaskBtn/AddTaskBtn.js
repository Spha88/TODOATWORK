import React from 'react';
import classes from './AddTaskBtn.module.css';
import AddBtn from '../UI/AddBtn/AddBtn';


const addTaskBtn = (props) => {

    return (
        <div className={classes.AddBtnContainer}>
            <button className={classes.AddTask} onClick={props.openAddTaskModal} key="addTaskBtn">
                 Add New Task <AddBtn />
            </button>
        </div>
    );
}

export default addTaskBtn;