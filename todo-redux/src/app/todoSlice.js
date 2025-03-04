import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        name: action.payload.task,
        completed: false
      }
      state.push(newTask)
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    },
    toggleTask: (state, action) => {
      const todo = state.find(task => task.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTask, deleteTask, toggleTask } = todoSlice.actions
export default todoSlice.reducer 