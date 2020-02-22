import React from 'react';
import classes from './Options.module.css';

const options = (props) => {

    let optionsClasses = [classes.Options];

    if(props.open){
        optionsClasses.push(classes.OpenOptions);
    }

    return (
        <div className={optionsClasses.join(' ')}>
            <span>Edit</span>
            <span>Delete</span>
        </div>
    );
}

export default options;