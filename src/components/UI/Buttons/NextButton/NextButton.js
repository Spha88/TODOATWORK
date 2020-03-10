import React from 'react';
import classes from './NextButton.module.css';

const nextButton = (props) => {
    let btnClasses = [classes.NextButton];
    if(props.disabled) btnClasses.push(classes.disabled);
    return ( 
        <button onClick={props.click} className={btnClasses.join(' ')}>
            <img src={require('../../../../assets/icons/next.png')} alt="next button icon" />
        </button>
     );
}
 
export default nextButton;