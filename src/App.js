import React from 'react'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import {TasksProvider} from './TasksContext'


const App = () => {
  return (
    <TasksProvider>
      <h1>My Cars Garage</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}

export default App
