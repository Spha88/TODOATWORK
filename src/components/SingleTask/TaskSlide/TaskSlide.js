import React, { Component } from 'react';
import classes from './TaskSlide.module.css';

class TaskSlide extends Component {

    // Resize the width of the cards to match that of the slide container
    // after the component has mounted
    resizeCards = () => { 
        let cardContainerWith = document.querySelector('#cardContainer').offsetWidth
        let cards = document.querySelector('#cardContainer').firstChild.children;
        for (let i = 0; i < cards.length; i++) cards[i].style.width = cardContainerWith + 'px';
    }
    

    render = () => {

        let tasks = this.props.tasks;
        // let key = props.key; I will use this key when I want to delete tasks from this page

        //make task cards from the tasks object
        let taskPage = Object.keys(tasks).map( key => {
            return (
                <div key={key} className={classes.taskCard}>
                    <h3>{tasks[key].title}</h3>
                    <main>
                        {tasks[key].details}
                    </main>
                </div>
            );
        });

        // Moves the strip to left or right depending on the slide that has to be shown or that is active.
        const slideStripStyle = {
            'transform': `translateX(-${this.props.current*(100/this.props.numberOfTasks)}%)`
        }

        return ( 
            <div id='cardContainer' className={classes.CardsContainer}>
                <div className={classes.CardStrip} style={ slideStripStyle }>
                    {taskPage}
                </div>
            </div>
        );
    } 

    componentDidMount = () => {
        this.resizeCards();
    }
}
 
export default TaskSlide;