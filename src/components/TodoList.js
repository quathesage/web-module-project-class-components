import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div>
      {props.toDoList.map(item => (
        <Todo handleToggleTask={props.handleToggleTask} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList;