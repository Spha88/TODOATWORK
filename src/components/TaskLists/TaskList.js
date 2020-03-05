import React, { Component } from 'react';
import Task from './Task/Task';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import Loading from '../UI/Loading/Loading';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import axios from 'axios';
import classes from './TaskList.module.css';
import { loadTask, addTask, openModal, closeModal } from '../../store/actions/index';
import { connect } from 'react-redux';

class TaskList extends Component {
    state = { 
        loading: true,
        errorLoading: false,
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
        this.props.onTaskListLoad(); //done through redux
        if(this.state.loading)
        axios.get('tasks.json')
            .then(res => {
                this.setState({ loading: false, tasks: res.data, errorLoading: false })
            })
            .catch(error => {
                console.log(error.status);
                this.setState({ errorLoading: true, loading: false });
            });
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
        const load = this.props.onTaskListLoad;
        if( this.props.onAddTask( data, load )){
            this.setState({
                taskTitle: '',
                taskDetails: '',
                // response: true,
                // loading: true
            })
        }
        // axios.post( 'tasks.json', data )
        //     .then( res => {
        //         console.log(res);
        //         this.setState({
        //             taskTitle: '',
        //             taskDetails: '',
        //             response: true,
        //             loading: true
        //         })
        //         setTimeout( this.toggleAddTaskModalHandler , 3000)
                
        //     })
        //     .catch(error => console.log(error));
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
    
    closeModal = () => {

        let openModal = this.props.openAddTaskModal ;
        if( openModal){ //if the modal is open, clean up the state and close. 
            this.props.onCloseModal();
            this.setState({
                taskTitle: '',
                taskDetails: '',
                editMode: false,
                editKey: ''
            })
        }
    }

    render() { 

        let taskList = <Loading />;

        let task;

        if( this.props.errorLoading === true ) { 
            task = "Error loading, please make sure you are connected to the internet" ;
            taskList = (
                <ul className={classes.TaskList}>
                    {task}
                    <AddTaskBtn
                        openAddTaskModal={this.toggleAddTaskModalHandler} />
                </ul>
            );
            
        }
        
        if( this.props.loading === false && this.props.errorLoading === false) {
            
            let tasks = this.props.tasks;
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
                        openAddTaskModal={this.props.onOpenModal} />
                </ul>
            );
        }

        return ( 
            <div className={classes.TaskListHolder}>

                {taskList}

                <AddTaskForm
                    titleValue = {this.state.taskTitle}
                    detailsValue = {this.state.taskDetails}
                    response = { this.props.response}
                    editMode = {this.state.editMode}

                    addTask = { this.addTaskHandler } 
                    inputChange = {this.inputChangeHandler} //handles both title and details input
                    closeModal = {this.closeModal} // closes the modal by changing openAddTaskModal to false
                    openAddTaskModal = { this.props.openAddTaskModal } //Sends true or false to the modal - modal opens if true and closes if flase
                    />
                    
            </div>
         );
    }

    componentDidMount(){
         this.fetchTask();
    }

    componentDidUpdate(){
        // this.fetchTask();
    }
}

const mapStateToProps = state => {
    return {
        loading: state.taskList.loading,
        tasks: state.taskList.tasks,
        errorLoading: state.taskList.errorLoading,

        openAddTaskModal: state.editTask.openModal,
        response: state.editTask.response
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskListLoad: () => dispatch(loadTask()),
        onAddTask: (data, loadTask) => dispatch(addTask(data, loadTask )),
        onOpenModal: () => dispatch(openModal()),
        onCloseModal: () => dispatch(closeModal())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);