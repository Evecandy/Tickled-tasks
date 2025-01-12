import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
