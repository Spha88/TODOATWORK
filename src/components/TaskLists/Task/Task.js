import React, { Component } from 'react';
import classes from './Task.module.css';
import OptionsIcon from '../../UI/OptionsIcon/OptionsIcon';
import Options from '../../Options/Options';
import OpenTaskBtn from '../../UI/OpenTaskBtn/OpenTaskBtn';
import { Link } from 'react-router-dom';

class Task extends Component {

    state = {
        openDetails: false,
        openOptions: false,
        showOptions: false,
        longText: false
    }

    componentDidMount(){
        this.openTask(this.props.details);
    }

    openDetailsHandler = (e, target) => {
        if(e.target.localName === 'span' || e.target.localName === 'div') {
            return;
        };
        this.setState({openDetails: !this.state.openDetails});
    }

    openOptionsHandler = (e) => {
        this.setState({openOptions: !this.state.openOptions});
    }

    openOptionsResetHandler = () => {
        if(this.state.openOptions) {
            this.setState({openOptions: false, showOptions: false});
        }
        this.setState({showOptions: false})
    }

    showOptionsIcon = () => {
        this.setState({showOptions: true});
    }

    openTask = (taskDetails) => {
        if( taskDetails.length > 100 ){
            this.setState({ longText: true })
            // console.dir(taskDetails.length);
        }
        
    }

    render(){

        let mainClasses = [classes.Main];
        let taskClasses = [classes.Task];
        if(this.state.openDetails === true) {
            mainClasses.push(classes.openDetails);
            taskClasses.push(classes.expandForDetails);
        }

        let viewTask = '';
        if(this.state.longText){
            viewTask = <Link to={`/single/${this.props.uniqueKey}`} ><OpenTaskBtn /></Link>
        }

        let task = this.props.title;
        if(task.length > 45 ) {
            task = task.slice(0, 45); //cut the string into 45 letters
            task = task.slice( 0,task.lastIndexOf(' ') ).concat(' ...') //remove the last par or words which are not cut nicely
        }

        return (
        <li 
            className={taskClasses.join(' ')} 
            key={this.props.uniqueKey}
            onMouseEnter={this.showOptionsIcon} 
            onMouseLeave={this.openOptionsResetHandler} 
            onClick={ this.openDetailsHandler }>

            <header>
                <h5 className={classes.Content}>{task}</h5> 
                <OptionsIcon
                    show = {this.state.showOptions} 
                    click={this.openOptionsHandler} 
                    optionsOpen={!this.state.openOptions}/> 
                <Options 
                    open={this.state.openOptions}
                    edit={this.props.edit}  
                    delete={this.props.delete}/> 
            </header>
            <main className={mainClasses.join(' ')}>
                <p>{this.props.details}</p>
                {viewTask}
            </main>
        </li>
    );
    }
}

export default Task;