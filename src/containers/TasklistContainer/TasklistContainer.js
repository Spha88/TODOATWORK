import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../Auth/Auth';
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
                <Switch>
                    <Route path="/task-list" component={TaskList} />
                    <Route path="/" component={Auth} />
                </Switch>
                
            </div>
         );
    }
}
 
export default TodoList;