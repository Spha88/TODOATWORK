import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../Auth/Auth';
import classes from './TasklistContainer.module.css';
import TaskList from '../../components/TaskLists/TaskList';
import Header from '../Header/Header';
import SingleTask from '../../components/SingleTask/SingleTask';

class TodoList extends Component {
    state = { 
        loadList: true
     }
    render() { 
        return ( 
            <div className={classes.TodoListContainer} >
                <Header />
                <Switch>    
                    <Route path="/task-list" component={TaskList} />
                    <Route path="/" exact component={Auth} />
                    <Route path="/single/:taskKey" exact component={SingleTask} />
                </Switch>
            </div>
         );
    }
}
 
export default TodoList;