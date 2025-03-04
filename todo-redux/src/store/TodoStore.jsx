import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/TodoSlice";

export const store = configureStore({
  reducer: {
    tasks: todoReducer
  }
})

