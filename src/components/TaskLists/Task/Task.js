import React from 'react';
import classes from './Task.module.css';
import OptionsIcon from '../../UI/OptionsIcon/OptionsIcon';

const task = (props) => {
    return (
        <li className={classes.Task}>
            <header><h5 className={classes.Content}>I am a task</h5> <OptionsIcon/></header>
            <main><p>this is extra information about the task that we are going to do</p></main>
        </li>
    );
}

export default task;