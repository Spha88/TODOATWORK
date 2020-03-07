import React from 'react';
import classes from './SingleTask.module.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const SingleTask = (props) => {

    console.log(props);

    const backToPrev = () => {
        props.history.goBack();
    }

    if( !props.tasks ){
       return <Redirect to="/task-list" />;
    }

    let key = props.match.params.taskKey;
    let tasks = props.tasks
    console.log('Key ' + key + ' and the tasks ' + tasks[key].title );

    return (
        <div className={classes.SingleTask} >
            <h4>{tasks[key].title}</h4>
            <p>{tasks[key].details}</p>
            <button onClick={ backToPrev }>Go Back</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.taskList.tasks
    }
}

export default connect(mapStateToProps)(SingleTask);