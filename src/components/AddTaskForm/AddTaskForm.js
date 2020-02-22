import React, { Component } from 'react';
import classes from './AddTaskForm.module.css';
import SubmitBtn from '../UI/SubmitBtn/SubmitBtn';
import CancelBtn from '../UI/CancelBtn/CancelBtn';
import Input from '../UI/FormElements/Input/Input';
import Textarea from '../UI/FormElements/Textarea/Textarea';

class addTaskForm extends Component {

    render(){

        let openAddTaskModal = this.props.openAddTaskModal;
        let formClasses = [classes.AddTaskForm];
        var formContainerclasses = [classes.FormContainer];
        // console.log(openAddTaskModal);

        if(openAddTaskModal){
            formClasses.push(classes.AddTask);
            formContainerclasses.push(classes.DropFormContainer)
            // setTimeout(()=>{ formContainerclasses.push(classes.DropFormContainer) }, 1000)
        };

        let response = this.props.response;
        let form = (
            <div className={formContainerclasses.join(' ')}>
                <h3>Add your task</h3>
                <form onSubmit={this.props.addTask}>
                    <Input 
                        value={this.props.titleValue}
                        title="Title" 
                        changed={this.props.inputChange}/>
                    <Textarea 
                        value={this.props.detailsValue}
                        title="Details" 
                        changed={this.props.inputChange}/>
                    <SubmitBtn label="Add Task"/> 
                </form>
                <CancelBtn onClick={ this.props.closeModal }/>
            </div>
        );

        let responseClasses = [ classes.Response ]

        if(response) {
            form="";
            responseClasses.push(classes.ResponseActive)
        }

        return (

            <div className={formClasses.join(' ')}>
                {form}
                <div className={responseClasses.join(' ')}>
                    <div className={classes.Sending}>
                        Task Added
                    </div>
                </div>
            </div>
        );
    }
}

export default addTaskForm;