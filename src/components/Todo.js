import React from 'react';


const Task = props => {
  const handleClick = () => {
    props.handleToggleTask(props.item)
  }

  return (
    <div onClick={handleClick} className={`item${props.item.completed ? ' completed ': ''}`}>
      <p>{props.item.task}</p>
    </div>
  )
}