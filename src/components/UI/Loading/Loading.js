import React from 'react';
import classes from './Loading.module.css';

const loading = () => (
    <div className={classes.Loading}>
        <div className={classes.Roller}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>
);

export default loading;