import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './app/todoSlice';
import App from './App';

const createTestStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer
    }
  });
};

describe('Todo App', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  test('renders TODO title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    expect(screen.getByText('Todo List Redux')).toBeInTheDocument();
  });

  test('input field accepts both numbers and letters', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add a task here...');
    fireEvent.change(input, { target: { value: 'Task 123' } });
    expect(input.value).toBe('Task 123');
  });

  test('shows error when trying to add empty task', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add a task here...');
    const addButton = screen.getByText('+');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    const todoList = screen.queryByRole('listitem');
    expect(todoList).not.toBeInTheDocument();
  });

  test('adds new task when text is entered and Add button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add a task here...');
    const addButton = screen.getByText('+');

    fireEvent.change(input, { target: { value: 'New Test Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Task')).toBeInTheDocument();

    expect(input.value).toBe('');
  });
}); 