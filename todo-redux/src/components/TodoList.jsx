import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { toggleTask, deleteTask } from '../app/todoSlice'

export const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div>
      <ul className="todo-list">
        {activeTodos.map(todo => (
          <li key={todo.id} className="todo-list-item">
            <p>{todo.name}</p>
            <div className="todo-list-options">
              <span onClick={() => dispatch(toggleTask({ id: todo.id }))}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span onClick={() => dispatch(deleteTask({ id: todo.id }))}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </div>
          </li>
        ))}
      </ul>
      {completedTodos.length > 0 && (
        <ul className='todo-list-completed'>
          {completedTodos.map(todo => (
            <li key={todo.id} className="todo-list-item complete">
              <p>{todo.name}</p>
              <span onClick={() => dispatch(toggleTask({ id: todo.id }))}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
