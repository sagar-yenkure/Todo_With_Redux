import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CompleteTodo: [],
};

export const completetodoslice = createSlice({
  name: "completedtodo",
  initialState,
  reducers: {
    addcomplete: (state, action) => {
      const completed = {
        id: action.payload.id,
        title: action.payload.title,
      };
      state.CompleteTodo.push(completed);
    },
    removecomplete: (state, action) => {
      state.CompleteTodo = state.CompleteTodo.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addcomplete, removecomplete } = completetodoslice.actions;

export default completetodoslice.reducer;
