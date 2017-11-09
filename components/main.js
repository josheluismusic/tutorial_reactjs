import React from 'react';
import {AddNewTask} from './addtask'
import {TodoAppList} from './todolist'

export class Todo extends React.Component {
  constructor (props) {
    super()
    this.state = {tasks: props.tasks}
    this.updateList = this.updateList.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  updateList(text) {
    var updateTasks = this.state.tasks;
    updateTasks.push(text);
    this.setState({tasks: updateTasks})
    this.updateLocalStorage(updateTasks)
  }

  removeTask(text) {
    var updateTasks = this.state.tasks;
    updateTasks.splice(updateTasks.indexOf(text), 1);
    this.setState({tasks: updateTasks})
    this.updateLocalStorage(updateTasks)
  }

  updateLocalStorage(updateTasks){
    console.log('saved the tasks')
    localStorage.setItem('storedTasks', JSON.stringify(updateTasks))
  }

  render () {
      return (
        <div>
          <h1>Todo app</h1>
          <AddNewTask updateList={this.updateList} />
          <TodoAppList tasks={this.state.tasks} remove={this.removeTask}/>
        </div>
      )
  }
};
