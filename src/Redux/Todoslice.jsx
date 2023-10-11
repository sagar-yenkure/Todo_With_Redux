import { createSlice, nanoid } from "@reduxjs/toolkit";

//this is the defoult state of todo

const initialState = {
  todos: []
 
};

// we created a slice means a state commponents

export const todoslice = createSlice({
  // this is the name of slice
  name: "todo",
  // the initialState which we created above at top

  initialState,

  // the reducers contain function to performs action on state with given action
  reducers: {
    //* the state is has values of initialstate
    //* the action is data which will we send from a compoment
    //* this are functions to add todo  in todos
    addtodo: (state, action) => {
      // the values of todo i.e Title will camme from action
      const newtodo = {
        id: nanoid(),
        title: action.payload,
      };
      // we pushing the accepted values form newtodo to initialState value
      state.todos.push(newtodo);
    },
    //* this function is ti delete the todos

    // filter always returns true values
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    //* this todo is to update function
    updatetodo: (state, action) => {
      for (let i = 0; i < state.todos.lenght; i++) {
        if (action.payload.id === state.todos.id) {
          state.todos.title === action.payload.title;
        }
      }
    },
  },
});
//  we can give action to functions from componetns

export const { addtodo, removetodo, updatetodo } = todoslice.actions;

// we are exporting the reducer functions to store
//! by exporting  functions we are specifying witch reducers function will work and wil not at stote.jsx
// this will export by default if not mentioned the import name /
export default todoslice.reducer;
