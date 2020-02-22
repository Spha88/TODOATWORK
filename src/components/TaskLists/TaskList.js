import React, { Component } from 'react';
import Task from './Task/Task';
import classes from './TaskList.module.css';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import Loading from '../UI/Loading/Loading';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

class TaskList extends Component {
    state = { 
        loading: false,
        openAddTaskModal: false
    }
    
    openAddTaskModalHandler = (e) => {
        e.preventDefault();
        let openModal = this.state.openAddTaskModal ;
        this.setState({openAddTaskModal: !openModal});
        console.log(openModal);
    }

    // submitAddTaskFormHandler = (e) => {
    //     e.preventDefault();
    //     this.openAddTaskModalHandler();
    // }

    render() { 
        let taskList;
        taskList = this.state.loading ? <Loading /> : (
            <ul className={classes.TaskList}>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <AddTaskBtn
                    openAddTaskModal={this.openAddTaskModalHandler} />
            </ul>
        );;

        return ( 
            <div className={classes.TaskListHolder}>
                {taskList}
                <AddTaskForm
                    submitAddTaskForm = {this.openAddTaskModalHandler}
                    opeAddTaskModal = { this.state.openAddTaskModal } 
                    closeAddTaskModal = {this.openAddTaskModalHandler }/>
            </div>
         );
    }
}
 
export default TaskList;