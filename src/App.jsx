import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task])
      setTask('')
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <>
      <h2>Welcome to the Todo App!</h2>

      <div className="container">
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your todo here..."
          />

          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="todo-list">
          {tasks.map((t, index) => (
            <li className="todo-item" key={index}>
              {t}
              <button className="remove-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App