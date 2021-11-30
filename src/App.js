import React from 'react';
import List from './components/TodoList';
import Form from './components/TodoForm';

const toDoList = [
  {
    task: 'School Work',
    id: 1,
    completed: false,
  },
  {
    task: 'Laundry',
    id: 2,
    completed:false,
  },
  {
    task: 'Walk the dog',
    id: 3,
    completed: false,
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    };
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(task => {
        return (!task.completed)
      })
    })
  }

  handleAddTask = (item) => {
    const newTask = {
      task: item,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  handleToggleTask = (task) => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(t => {
        if (t.id === task.id) {
          return{...t, completed: !t.completed}
        } else {
          return t;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todo App</h2>
          <Form handleAddTask={this.handleAddTask}/>
        </div>
        <List handleToggleTask={this.handleToggleTask} toDoList={this.state.toDoList}/>
        <button onClick={this.handleToggle}>Clear Task</button>
      </div>
    );
  }
}

export default App;
