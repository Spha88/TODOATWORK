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
        longText: false
    }

    componentDidMount(){
        this.openTask(this.props.details);
    }

    openDetailsHandler = (e) => {
        if(e.target.localName === 'span' || e.target.localName === 'div') {
            return;
        };
        this.setState({openDetails: !this.state.openDetails});
    }

    openOptionsHandler = () => {
        this.setState({openOptions: !this.state.openOptions});
    }

    openOptionsResetHandler = () => {
        if(this.state.openOptions) {
            this.setState({openOptions: false});
        }
    }

    openTask = (taskDetails) => {
        if( taskDetails.length > 100 ){
            this.setState({ longText: true })
            console.dir(taskDetails.length);
        }
        
    }

    render(){

        let mainClasses = [classes.Main];
        if(this.state.openDetails === true) {
            mainClasses.push(classes.openDetails);
        }

        let viewTask = '';
        if(this.state.longText){
            console.log('text is too long')
            viewTask = <Link to={`/single/${this.props.title}/${this.props.details}`} ><OpenTaskBtn /></Link>
        }

        return (
        <li 
            className={classes.Task} key={this.props.uniqueKey} 
            onMouseLeave={this.openOptionsResetHandler} 
            onClickCapture={ this.openDetailsHandler }>

            <header>
                <h5 className={classes.Content}>{this.props.title}</h5> 
                <OptionsIcon click={this.openOptionsHandler} optionsOpen={!this.state.openOptions}/> 
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