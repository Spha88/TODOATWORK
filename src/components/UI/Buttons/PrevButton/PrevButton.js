import React from 'react';
import classes from './PrevButton.module.css';

const prevButton = (props) => {
    return ( 
        <button onClick={props.click} className={classes.PrevButton}>
            <img src={require('../../../../assets/icons/prev.png')} alt="previous button icon" />
        </button>
     );
}
 
export default prevButton;