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

        return (
            <div className={formClasses.join(' ')}>
                <div className={formContainerclasses.join(' ')}>
                    <h3>Add your task</h3>
                    <form onSubmit={this.props.addTask}>
                        <Input 
                            title="Title" 
                            changed={this.props.inputChange}/>
                        <Textarea 
                            placeholder="Enter your datails" 
                            title="Details" 
                            changed={this.props.inputChange}/>
                        <SubmitBtn label="Add Task"/> 
                    </form>
                    <CancelBtn onClick={ this.props.closeModal }/>
                </div>
            </div>
        );
    }
}

export default addTaskForm;