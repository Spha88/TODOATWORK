import React from 'react';
import classes from './OpenTaskBtn.module.css';


const openTaskBtn = (props) => {

    return (
        <div className={classes.ObenTaskBtnContainer}>
            <button className={classes.AddTask} onClick={props.clicked} key="addTaskBtn">
                 Open Task
            </button>
        </div>
    );
}

export default openTaskBtn;