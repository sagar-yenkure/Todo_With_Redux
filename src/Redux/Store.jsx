import { configureStore } from "@reduxjs/toolkit";
// here we importing all the reducers from todoSlice
import todo_reducers from "./Todoslice"

export default configureStore({
  reducer:todo_reducers
});
  