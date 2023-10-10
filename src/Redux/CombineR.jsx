import { combineReducers } from "@reduxjs/toolkit";

import todo_reducers from "./Todoslice";
import count_slice from "./Countslice";

export default combineReducers({
 todo_reducers,
 count_slice
});
  