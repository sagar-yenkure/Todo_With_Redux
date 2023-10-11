import React, { useState } from "react";
import { BsCheckCircleFill, BsCheckCircle, BsPencilFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useDispatch } from "react-redux";
import { removetodo } from "../Redux/Todoslice";
import { decrement } from "../Redux/Countslice";
import { addcomplete,removecomplete } from "../Redux/Completedslice";
const Items = (props) => {
  const dispatch = useDispatch();
  const { title, id } = props;
  const [completed, setcompleted] = useState(Boolean);

  const handleremove = () => {
    dispatch(removetodo(id));
    dispatch(decrement(1));
  };

  const marked = () => {
    setcompleted(true)
    if (completed) {
      setcompleted(false);
      dispatch(removecomplete(id))
    } else {
      setcompleted(true);
      dispatch(addcomplete({
        id:id,
        title:title
      }))
    }
  };
  

  return (
    <>
      <li
        key={id}
        className={` rounded-xl list-group-item my-3 ${
          completed ? "bg-blue-300" : "bg-white"
        }`}
      >
        <div className="flex justify-between  rounded-lg p-3">
          <span className="flex items-center justify-center space-x-3">
            <button className="mt-1" onClick={marked}>
              {completed ? (
                <BsCheckCircleFill size={20} />
              ) : (
                <BsCheckCircle size={20} />
              )}
            </button>

            <h1 className="text-xl">{title}</h1>
          </span>
          <div className="butons flex space-x-5">
            <button>
              <BsPencilFill size={20} />
            </button>
            <button onClick={handleremove}>
              <RxCross2 size={25} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Items;
