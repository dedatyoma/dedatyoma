import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ClearButton from './components/ClearButton';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
        <ClearButton />
      </div>
    </Provider>
  );
};

export default App;