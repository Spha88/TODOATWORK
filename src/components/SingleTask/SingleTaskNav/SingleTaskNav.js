import React from 'react';
import classes from './SingleTaskNav.module.css';

import PrevButton from '../../UI/Buttons/PrevButton/PrevButton';
import NextButton from '../../UI/Buttons/NextButton/NextButton';

const singleTaskNav = (props) => {

    let disablePrevButton = props.current === 1 ?  true : false ;
    let disableNextButton = props.numberOfTask === props.current ? true : false ;

    return ( 
        <nav className={classes.SingleTaskNav}>
            <PrevButton click={props.prev} disabled={disablePrevButton} />
            <span>
                {props.current} of  { props.numberOfTask }
            </span> 
            <NextButton click={props.next} disabled={disableNextButton} />
        </nav>
     );
}
 
export default singleTaskNav;