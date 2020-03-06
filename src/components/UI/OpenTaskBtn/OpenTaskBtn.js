import React from 'react';
import classes from './OpenTaskBtn.module.css';
import AddBtn from '../AddBtn/AddBtn';


const openTaskBtn = (props) => {

    return (
        <div className={classes.ObenTaskBtnContainer}>
            <button className={classes.AddTask} onClick={props.openAddTaskModal} key="addTaskBtn">
                 Open Task
            </button>
        </div>
    );
}

export default openTaskBtn;