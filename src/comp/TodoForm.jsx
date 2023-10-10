import React, { useState } from "react";
// dispatch hook to send an event with action to reducers to take action and perform functions
import { useDispatch } from "react-redux";
// here we can send data to specific reducer function using dispatch
import{addtodo} from "../Redux/Todoslice"
import { incrceament } from "../Redux/Countslice";

const TodoForm = () => {
  const dispatch= useDispatch()
let [value, setvalue] = useState("")

  const onSubmit = (e) => {
    // to prevent reloading on submit button
    e.preventDefault()
    if(!value) return;
    // it will call the function in slice and upadtes the state
    dispatch(addtodo(value ))
    dispatch(incrceament(1))
    setvalue("")
  };
 
  return (
    <>
    
    <div className="flex justify-between  ">

    <form onSubmit={onSubmit} className="rounded-lg space-x-4 mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 p-3 rounded-lg mr-sm-2"
        placeholder="Add todo..."
        value={value} 
        onChange={(e)=>setvalue(e.target.value)}
      ></input>

      <button type="submit"  className="btn bg-blue-300 p-2 px-5 mt-2 rounded-lg mb-2">
        Add
      </button>
    </form> 
    </div>
    <div className="button flex space-x-10 justify-center">
      <button>All</button>
      <button>Completed</button>
      <button>Pending</button>
    </div>
    </>
  );
};

export default TodoForm;
