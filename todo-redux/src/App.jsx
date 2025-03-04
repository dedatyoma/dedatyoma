import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
 
return(
  <div className='todo' id='app'>
    <h1 className="title">Todo List Redux</h1>
    <TodoInput/>
    <TodoList/>
  </div>
)
 
}

export default App
