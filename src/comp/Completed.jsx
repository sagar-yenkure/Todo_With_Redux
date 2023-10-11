import React from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const complet = useSelector((state) => state.complete_slice.CompleteTodo);

  return (
    <>
      {complet.map((el) => {
        return (
          <div>
            <div className="flex justify-between  rounded-lg p-3">
              <span className="flex items-center justify-center space-x-3">
                <h1 className="text-xl">{el.title}</h1>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Completed;
