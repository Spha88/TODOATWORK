import React from 'react';
import classes from './Message.module.css';

const message = (props) => {
    
    let messageClasses = [classes.Message];
    if(props.class === 'Success')messageClasses.push(classes.Success);
    if (props.class === 'Danger') messageClasses.push(classes.Danger) ;

    return ( 
        <div className={messageClasses.join(' ')} onClick={props.click}>
            <p>{props.message}</p>
        </div>
     );
}
 
export default message;