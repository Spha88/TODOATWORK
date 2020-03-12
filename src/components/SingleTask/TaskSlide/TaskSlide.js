import React, { Component } from 'react';
import classes from './TaskSlide.module.css';

class TaskSlide extends Component {

    

    render = () => {
        let tasks = this.props.tasks;
        // let key = props.key;

        let taskList = Object.keys(this.props.tasks).map( key => {
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
            <div id='cardContainer' className={classes.CardsContainer}>
                <div className={classes.CardStrip} style={{
                    'transform': `translateX(-${this.props.current*(100/this.props.numberOfTasks)}%)`
                }}>
                    {taskList}
                </div>
            </div>
        );
    } 

    componentDidMount = () => {
       let cardContainer = document.querySelector('#cardContainer');
       let cardContainerWith = cardContainer.offsetWidth
       let cards = cardContainer.firstChild.children;
       console.log(cardContainerWith);
       console.dir(cardContainer);
       console.log(cards);
        for (let i = 0; i < cards.length; i++){
            cards[i].style.width = cardContainerWith + 'px';
            console.log(cards[i]);
        }
       
    }
}
 
export default TaskSlide;