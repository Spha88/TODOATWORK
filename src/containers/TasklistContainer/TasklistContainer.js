import React, {Component} from 'react';
import classes from './TasklistContainer.module.css';
import TaskList from '../../components/TaskLists/TaskList';

class TodoList extends Component {
    state = { 
        loadList: true
     }
    render() { 
        return ( 
            <div className={classes.TodoListContainer} >
                <h2>Tasks</h2>
                <TaskList />
            </div>
         );
    }
}
 
export default TodoList;