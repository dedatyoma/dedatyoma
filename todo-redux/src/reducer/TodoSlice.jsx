import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name:'todos',
  initialState: [],
  reducers:{
    addTask: (state, actions) => {
      const newTask = {
        id: new Date(),
        name: actions.payload.task
      }
      state.push(newTask)
    },
    deleteTask: (state, actions) => {
      return state.filter(item => item.id !== actions.payload.id)
    },
    toggleTask: (state, actions) => {
      const todo = state.find(t => t.id === actions.payload)
      if(todo){
        todo.completed = !todo.completed
      }
    }
  }
})

export const {addTask, deleteTask, toggleTask} = todoSlice.actions;
export default todoSlice.reducer;