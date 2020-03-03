import React from 'react';
import classes from './Options.module.css';

const options = (props) => {

    let optionsClasses = [classes.Options];

    if(props.open){
        optionsClasses.push(classes.OpenOptions);
    }

    return (
        <div className={optionsClasses.join(' ')}>
            <span onClick={props.edit}>Edit</span>
            <span onClick={props.delete}>Delete</span>
        </div>
    );
}

export default options;