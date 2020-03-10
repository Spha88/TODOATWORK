import React from 'react';
import classes from "./BackBtn.module.css";

const backBtn = (props) => {
    return ( 
        <div className={classes.BackBtn}>
            <button onClick={props.clicked}>{props.label}</button>
        </div>
     );
}
 
export default backBtn;