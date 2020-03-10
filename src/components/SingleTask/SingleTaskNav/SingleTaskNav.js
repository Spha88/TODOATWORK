import React from 'react';
import classes from './SingleTaskNav.module.css';

import PrevButton from '../../UI/Buttons/PrevButton/PrevButton';
import NextButton from '../../UI/Buttons/NextButton/NextButton';

const singleTaskNav = (props) => {
    return ( 
        <nav className={classes.SingleTaskNav}>
            <PrevButton click={props.prev} />
            <span>
                {props.current} of  { props.numberOfTask }
            </span> 
            <NextButton click={props.next} />
        </nav>
     );
}
 
export default singleTaskNav;