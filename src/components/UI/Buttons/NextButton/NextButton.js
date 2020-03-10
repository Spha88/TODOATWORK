import React from 'react';
import classes from './NextButton.module.css';

const nextButton = (props) => {
    return ( 
        <button onClick={props.click} className={classes.NextButton}>
            <img src={require('../../../../assets/icons/next.png')} alt="next button icon" />
        </button>
     );
}
 
export default nextButton;