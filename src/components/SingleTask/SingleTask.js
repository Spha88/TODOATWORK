import React from 'react';
import classes from './SingleTask.module.css';


const SingleTask = (props) => {

    console.log(props);

    return (
        <div className={classes.SingleTask} >
            <h4>{props.match.params.title}</h4>
            <p>{props.match.params.details}</p>
        </div>
    );
}

export default SingleTask;