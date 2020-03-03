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
        editMode: false,
        editKey: '',
        taskTitle: '',
        taskDetails: '',
        response: false,
        tasks: {
            mytask: {
                title: 'this is the title',
                details: 'these are the details'
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

        //Edit Task
        if(this.state.editMode === true) {
            axios.patch(`tasks/${this.state.editKey}/.json`, data )
                .then(res => {
                    console.log(res);
                    this.setState({
                        taskTitle: '',
                        taskDetails: '',
                        response: true,
                        loading: true,
                        editMode: false,
                        editKey: ''
                    })
                    setTimeout( this.toggleAddTaskModalHandler , 3000)
                })
                .catch(error => console.log(error))
                return;
        }

        //Add task
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

    editTaskHandler = (key) => {
        let taskToEdit = {...this.state.tasks[key]};
        this.setState({
            taskTitle: taskToEdit.title, 
            taskDetails: taskToEdit.details, 
            editKey: key,
            editMode: true //tell the form to show edit button and the title shouldbe 'Edit this task'
        });

        this.toggleAddTaskModalHandler(); //Open the modal
    }

    deleteTaskHandler = ( key ) => {
        axios.delete(`tasks/${key}.json` )
            .then(res => {
                this.setState({loading: true});
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    inputChangeHandler = (e) => {
        let updatedTaskTitle =  this.state.taskTitle ;
        let updatedTaskDetails =  this.state.taskDetails ;
        e.target.name === 'title' ? updatedTaskTitle = e.target.value : updatedTaskDetails = e.target.value ;
        this.setState({ taskTitle: updatedTaskTitle, taskDetails: updatedTaskDetails });
        // console.log(e.target.value);
    }
    
    toggleAddTaskModalHandler = () => {
        let openModal = this.state.openAddTaskModal ;

        if(openModal){ //if the modal is open, clean up the state and close. 
            this.setState({
                taskTitle: '',
                taskDetails: '',
                editMode: false,
                editKey: '',
                openAddTaskModal: !openModal, 
                response: false
            })
            return;
        }

        this.setState({
            openAddTaskModal: !openModal, 
            response: false
        });
        // console.log(openModal);
    }

    render() { 

        let taskList = <Loading />;
        
        if(this.state.loading === false) {
            let task;
            let tasks = this.state.tasks;
            console.log(tasks);
            if( tasks === null ){
                task = (<p>No task found, add a task</p>)
            } else {
                task = Object.keys(tasks).map( taskKey => {
                    return (
                        <Task
                            key = {taskKey}
                            title={tasks[taskKey].title}
                            details={tasks[taskKey].details}
    
                            edit={ () => this.editTaskHandler(taskKey) }
                            delete={ () => this.deleteTaskHandler( taskKey ) } />
                    );
                } );
            }
            

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
                    editMode = {this.state.editMode}

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