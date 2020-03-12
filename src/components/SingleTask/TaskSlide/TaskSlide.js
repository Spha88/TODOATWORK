import React from 'react';
import classes from './TaskSlide.module.css';

const taskSlide = props => {

    let tasks = props.tasks;
    // let key = props.key;
    console.log(props.current);
    console.log(props.numberOfTasks);

    let taskList = Object.keys(props.tasks).map( key => {
        return (
            <div key={key} className={classes.taskCard}>
                <h3>{tasks[key].title}</h3>
                <main>
                    {tasks[key].details}
                </main>
            </div>
        );
    });

    return ( 
        <div className={classes.CardsContainer}>
            <div className={classes.CardStrip} style={{
                'transform': `translateX(-${props.current*(100/props.numberOfTasks)}%)`
            }}>
                {taskList}
            </div>
        </div>
    );
}
 
export default taskSlide;