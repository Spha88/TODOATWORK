import React, { Component } from 'react';
import Task from './Task/Task';
import classes from './TaskList.module.css';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import Loading from '../UI/Loading/Loading';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import axios from 'axios';

class TaskList extends Component {
    state = { 
        loading: true,
        openAddTaskModal: false,
        taskTitle: '',
        taskDetails: '',
        response: false,
        tasks: {
            id:{
                title: 'yes',
                details: 'yes'
            }
        }
    }

    fetchTask = () => {
        if(this.state.loading)
        axios.get('tasks.json')
            .then(res => {
                this.setState({ loading: false, tasks: res.data })
            })
            .catch(error => console.log(error));
    }

    addTaskHandler = (e) => {
        e.preventDefault();
        let data = {
            title: this.state.taskTitle,
            details: this.state.taskDetails
        }
        axios.post( 'tasks.json', data )
            .then( res => {
                console.log(res);
                this.setState({
                    taskTitle: '',
                    taskDetails: '',
                    response: true,
                    loading: true
                })
                setTimeout( this.toggleAddTaskModalHandler , 3000)
            })
            .catch(error => console.log(error));
    }

    inputChangeHandler = (e) => {
        let updatedTaskTitle =  this.state.taskTitle ;
        let updatedTaskDetails =  this.state.taskDetails ;
        e.target.name === 'title' ? updatedTaskTitle = e.target.value : updatedTaskDetails = e.target.value ;
        this.setState({ taskTitle: updatedTaskTitle, taskDetails: updatedTaskDetails });
        // console.log(e.target.value);
    }
    
    toggleAddTaskModalHandler = (e) => {
        let openModal = this.state.openAddTaskModal ;
        this.setState({openAddTaskModal: !openModal, response: false});
        // console.log(openModal);
    }

    render() { 
        
        let taskList = <Loading />;
        
        if(this.state.loading === false) {
            let task;
            let tasks = this.state.tasks;
            task = Object.keys(tasks).map( key => {
                return (
                    <Task
                        key = {key}
                        title={tasks[key].title}
                        details={tasks[key].details} />
                );
            });

            taskList = (
                <ul className={classes.TaskList}>
                    {task}
                    <AddTaskBtn
                        openAddTaskModal={this.toggleAddTaskModalHandler} />
                </ul>
            );
        }

        return ( 
            <div className={classes.TaskListHolder}>

                {taskList}

                <AddTaskForm
                    titleValue = {this.state.taskTitle}
                    detailsValue = {this.state.taskDetails}
                    response = { this.state.response}

                    addTask = { this.addTaskHandler } 
                    inputChange = {this.inputChangeHandler} //handles both title and details input
                    closeModal = {this.toggleAddTaskModalHandler} // closes the modal by changing openAddTaskModal to true
                    openAddTaskModal = { this.state.openAddTaskModal } //Sends true or false to the modal - modal opens if true and closes if flase
                    />
                    
            </div>
         );
    }

    componentDidMount(){
        this.fetchTask();
    }

    componentDidUpdate(){
        this.fetchTask();
    }
}
 
export default TaskList;