import React from 'react'
import ReactDom from 'react-dom'
import {Todo} from './components/main'

var taskList = ["Task 1", "Task 2", "Task 3"]

var tasks = localStorage.getItem('storedTasks')

if(tasks){
  taskList = JSON.parse(tasks)
}

ReactDom.render (
  <Todo  tasks={taskList}/>,
  document.getElementById('todo')
)
