import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object().shape({
    task: Yup.string()
    .min(5, 'Task must be at least 5 characters long')
    .max(100, 'Task must be less than 100 characters long')
    .required('Task is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, { id: Date.now(), text: values.task, completed: false }]);
    resetForm();
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>

      <Formik
        initialValues={{ task: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field 
          type='text' 
          name='task' 
          placeholder='Add new task'/>
          <ErrorMessage name='task' component='div' className='error'/>
          <button type='submit'>Add</button>
        </Form>
      </Formik>
      <ul>
      {todos.map(todo => (
        <li key={todo.id}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange ={() => toggleTodo(todo.id)}
            />
         <span 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            </span>
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
      ))}
      </ul>
    </div>
  )
}


export default App