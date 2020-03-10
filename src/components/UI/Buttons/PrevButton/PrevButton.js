import React from 'react';
import classes from './PrevButton.module.css';

const prevButton = (props) => {

    let btnClasses = [classes.PrevButton];
    if(props.disabled) btnClasses.push(classes.disabled);

    return ( 
        <button onClick={props.click} className={btnClasses.join(' ')}>
            <img src={require('../../../../assets/icons/prev.png')} alt="previous button icon" />
        </button>
     );
}
 
export default prevButton;