import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { 
    loadTask, addTask, openModal, closeModal, editTaskStart, 
    editingTaskContent, editTaskSave, deleteTask
} from '../../store/actions/index';

import Task from './Task/Task';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import Loading from '../UI/Loading/Loading';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import Message from '../UI/Message/Message';

import classes from './TaskList.module.css';




class TaskList extends Component {

    addTaskHandler = (e) => {
        e.preventDefault();
        let data = {
            title: this.props.taskTitle,
            details: this.props.taskDetails
        }
        const load = this.props.onTaskListLoad;
        this.props.editMode === true ? this.props.onEditTaskSave(this.props.editKey, data, load ) : //Edit Task
        this.props.onAddTask( data, load ); //Adding task
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

    render() { 

        let taskList = <Loading />;

        if (this.props.errorLoading === true ) {
            taskList = <Message message="Error loading please make sure you are connected to the internet" />
        }
        
        if( this.props.loading === false && this.props.errorLoading === false ) {
            let tasks = this.props.tasks;
            if ( tasks === null ){
                taskList = <Message class="Danger" click={this.props.onOpenModal} message="No task found, add a task" />
            } else {
                taskList = Object.keys(tasks).map( taskKey => {
                    return (
                        <Task
                            key = {taskKey}
                            uniqueKey = {taskKey}
                            title={tasks[taskKey].title}
                            details={tasks[taskKey].details}
    
                            edit={ () => this.props.onEditTaskStart( taskKey, this.props.tasks ) }
                            delete={ () => this.props.onDeleteTask( taskKey, this.props.onTaskListLoad ) } />
                    );
                } );
            }
        }

        return ( 
            <div className={classes.TaskListHolder}>

                <ul className={classes.TaskList}> { taskList } </ul>
                
                <AddTaskBtn openAddTaskModal={this.props.onOpenModal} />

                <AddTaskForm
                    titleValue = {this.props.taskTitle}
                    detailsValue = {this.props.taskDetails}
                    response = { this.props.response}
                    editMode = {this.props.editMode}

                    addTask = { this.addTaskHandler } 
                    inputChange = {this.props.onEditingTaskContent} //handles both title and details input
                    closeModal = {this.props.onCloseModal} // closes the modal by changing openAddTaskModal to false
                    openAddTaskModal = { this.props.openAddTaskModal } //Sends true or false to the modal - modal opens if true and closes if flase
                    />
            </div>
         );
    }

    componentDidMount(){
        this.props.onTaskListLoad(); //done through redux
    }
}

const mapStateToProps = state => {
    return {
        loading: state.taskList.loading,
        tasks: state.taskList.tasks,
        errorLoading: state.taskList.errorLoading,

        openAddTaskModal: state.editTask.openModal,
        response: state.editTask.response,

        editMode: state.editTask.editMode,
        taskTitle: state.editTask.taskTitle,
        taskDetails: state.editTask.taskDetails,
        editKey: state.editTask.editKey
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskListLoad: () => dispatch(loadTask()),
        onAddTask: (data, loadTask) => dispatch(addTask(data, loadTask )),
        onOpenModal: () => dispatch(openModal()),
        onCloseModal: () => dispatch(closeModal()),
        onEditTaskStart: (key, tasks) => dispatch(editTaskStart(key, tasks)),
        onEditingTaskContent: (e) => dispatch(editingTaskContent(e)),
        onEditTaskSave: (key, data, loadTask) => dispatch(editTaskSave(key, data, loadTask)),
        onDeleteTask: ( key, load ) => dispatch(deleteTask(key, load ))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);