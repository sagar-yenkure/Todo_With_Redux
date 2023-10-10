import React from 'react'
import { useSelector } from "react-redux";
const Total = () => {

  const count=useSelector(state=>state.count_slice.count)
  return (
     <h4 className='mt-3 text-black'>Total todos: {count}</h4>
  )
}

export default Total;