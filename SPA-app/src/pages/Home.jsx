import {useState} from 'react'

function Home(){
  const [todos, setTodos,] = useState([])
  const [newTodo,setNewTodo] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return 
    setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
    setNewTodo('');
  }
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }
  return(
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new todo'
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange ={() => toggleTodo(todo.id)}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Home;