import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countslice = createSlice({
    
  name:" Count",
  initialState,
  reducers: {
    // function to increment count of todos
    incrceament: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement:(state,action)=>{
      state.count=state.count-action.payload

    }
  },
});

export const{incrceament, decrement}=countslice.actions
export default countslice.reducer