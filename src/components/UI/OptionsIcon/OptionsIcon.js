import React from 'react';
import classes from './OptionsIcon.module.css';

const options = (props) => {

    let optionsIconClasses = [classes.OptionsIcon]
    if(!props.optionsOpen){
        optionsIconClasses.push(classes.HideOptionIcon)
    }

    if(props.show){
        optionsIconClasses.push(classes.OptionsIconShow);
    }

    return (
        <div className={optionsIconClasses.join(' ')} onClick={ props.click }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default options;