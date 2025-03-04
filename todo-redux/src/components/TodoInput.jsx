import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../app/todoSlice'

export const TodoInput = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      dispatch(addTask({ task: task.trim() }))
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input"
        placeholder="Add a task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  )
}

export default TodoInput