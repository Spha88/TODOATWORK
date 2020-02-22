import React, { Component } from 'react';
import classes from './AddTaskForm.module.css';
import SubmitBtn from '../UI/SubmitBtn/SubmitBtn';
import CancelBtn from '../UI/CancelBtn/CancelBtn';

class addTaskForm extends Component {

    componentDidMount(){
        console.log('Component did mount')
    }


    componentDidUpdate(prevProps){
        console.log('component updated');
    }

    render(){

        let openAddTaskModal = this.props.opeAddTaskModal;
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
                    <form onSubmit={this.props.submitAddTaskForm}>
                        <div className={classes.FormGroup}>
                            <label>Title</label>
                            <input name="title"/>
                        </div>
                        <div className={classes.FormGroup}>
                            <label>Details</label>
                            <textarea>
                            </textarea>
                        </div>
                        <SubmitBtn /> <CancelBtn onClick={ this.props.closeAddTaskModal }/>
                    </form>
                </div>
            </div>
        );
    }
}

export default addTaskForm;