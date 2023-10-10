import React, { useState } from "react";
import { BsCheckCircleFill,BsCheckCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useDispatch } from "react-redux";
import { removetodo } from "../Redux/Todoslice";
import { decrement } from "../Redux/Countslice";
const Items = (props) => {
  const dispatch = useDispatch();
  const { title, id } = props;
  const [completed, setcompleted] = useState(false);

  const handleremove = () => {
    dispatch(removetodo(id));
    dispatch(decrement(1));
  };
  const marked=()=>{
    if(completed){
      setcompleted(false)
    }
    else{
      setcompleted(true)
    }

  }

  return (
    <>
      <li
        key={id}
        className={` rounded-xl list-group-item my-3 ${
          completed ? "bg-blue-300" :"bg-white"
        }`}
      >
        <div className="flex justify-between  rounded-lg p-3">
          <span className="flex items-center justify-center space-x-3">
            <button className="mt-1" onClick={marked}>
              {completed?<BsCheckCircleFill size={20}/>:<BsCheckCircle size={20}/>}
            </button>
            

            <h1 className="text-xl">{title}</h1>
          </span>
          
          <button onClick={handleremove}>
            <RxCross2 size={20} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Items;
