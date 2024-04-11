import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice.js'; 

export const store = configureStore({
  reducer: {
    todos: todosSlice
  },
});