import React, { useState } from "react";
import Items from "./Items";
// this is hook to get the value of state
import { useSelector } from "react-redux";
// import  todo_reducers from "../Redux/Todoslice"

const Todolist = () => {
  const todo = useSelector((state) => state.todo_reducers.todos);

  return (
    <>
      {/* <h1 className="text-red-600">{"please Enter a TODO"}</h1> */}

      <ul className="list-group">
        {todo.length===0 && <div className='text-xl font-extralight flex justify-center'> No TODO Available To Display 
          </div>}
        {todo.map((el) => (
          <Items id={el.id} title={el.title} />
        ))}
      </ul>
    </>
  );
};

export default Todolist;
