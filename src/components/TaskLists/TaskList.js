import React, { Component } from 'react';
import Task from './Task/Task';
import classes from './TaskList.module.css';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import Loading from '../UI/Loading/Loading';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

class TaskList extends Component {
    state = { 
        loading: false,
        openAddTaskModal: false,
        taskTitle: '',
        taskDetails: ''
    }

    inputChangeHandler = (e) => {
        let updatedTaskTitle =  this.state.taskTitle ;
        let updatedTaskDetails =  this.state.taskDetails ;
        e.target.name === 'title' ? updatedTaskTitle = e.target.value : updatedTaskDetails = e.target.value ;
        this.setState({ taskTitle: updatedTaskTitle, taskDetails: updatedTaskDetails });
        console.log(e.target.value);
    }
    
    toggleAddTaskModalHandler = (e) => {
        let openModal = this.state.openAddTaskModal ;
        this.setState({openAddTaskModal: !openModal});
        // console.log(openModal);
    }

    closeAddTaskModalHandler =(e) => {
        console.log('I want to close this shit');
    }

    addTaskHandler = (e) => {
        e.preventDefault();
        console.log('I am ready to add task')
    }

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
                    openAddTaskModal={this.toggleAddTaskModalHandler} />
            </ul>
        );;

        return ( 
            <div className={classes.TaskListHolder}>
                {taskList}
                <AddTaskForm
                    addTask = { this.addTaskHandler } 
                    inputChange = {this.inputChangeHandler} //handles both title and details input
                    closeModal = {this.toggleAddTaskModalHandler} // closes the modal by changing openAddTaskModal to true
                    openAddTaskModal = { this.state.openAddTaskModal } //Sends true or false to the modal - modal opens if true and closes if flase
                    />
                    
            </div>
         );
    }
}
 
export default TaskList;