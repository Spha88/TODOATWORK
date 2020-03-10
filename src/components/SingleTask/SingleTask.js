import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './SingleTask.module.css';

import BackBtn from '../UI/BackBtn/BackBtn';
import SingleTaskNav from './SingleTaskNav/SingleTaskNav';

class SingleTask extends Component {
    state = {
        tasks: null,
        current: null
    }

    backToPrev = () => { //back to task list when done viewing the tasks
        this.props.history.goBack();
    }

    nextItem = () => {
        if(this.state.current < this.state.tasks.length - 1){
            this.setState({current: this.state.current + 1 });
        }
    }
    
    prevItem = () => {
        if(this.state.current > 0 ) {
            this.setState({current: this.state.current - 1})
        }
    }

    prepareTasks = (tasks) => {
        let key = this.props.match.params.taskKey;
        let taskArray = Object.keys(tasks).map( key => {
            return key
        })
        this.setState({tasks: taskArray, current: taskArray.indexOf(key)});
    }

    render() {

        if( !this.props.tasks ){ //redirect bact to task list if there are no tasks
            return <Redirect to="/task-list" />;
        }

        let tasks = this.props.tasks

        return (
            <div className={classes.SingleTask} >
                {this.state.tasks ? <SingleTaskNav 
                    prev = {this.prevItem}
                    next = {this.nextItem}
                    current = {this.state.current + 1}
                    numberOfTask = {this.state.tasks.length} /> : null }
                <h4>{this.state.tasks? tasks[this.state.tasks[this.state.current]].title : null }</h4>
                <p>{this.state.tasks? tasks[this.state.tasks[this.state.current]].details : null }</p>
                <BackBtn clicked={ this.backToPrev } label="Back to Task List" />
            </div>
        );
    }

    componentDidMount(){
        if (this.props.tasks) this.prepareTasks(this.props.tasks);
    }
}

const mapStateToProps = state => {
    
    return {
        tasks: state.taskList.tasks
    }
}

export default connect(mapStateToProps)(SingleTask);