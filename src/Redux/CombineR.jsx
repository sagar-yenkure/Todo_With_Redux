import { combineReducers } from "@reduxjs/toolkit";

import todo_reducers from "./Todoslice";
import count_slice from "./Countslice";
import complete_slice from "./Completedslice"

export default combineReducers({
 todo_reducers,
 count_slice,
 complete_slice
});
  