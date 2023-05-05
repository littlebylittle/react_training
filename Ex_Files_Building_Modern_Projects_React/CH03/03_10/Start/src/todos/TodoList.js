import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm todos={todos} />
        <hr attr1="wut"></hr>
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onCompletePressed={ onCompletePressed }            
            />)}
    </div>
);


// Below we register button actions and dispatch them to the redux storage throug redux's `connect` functionality
const mapStateToProps = state => ({
    todos: state.todos,
    dispathExampleProperty: "from_mapDispatchToProps"
});


const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);