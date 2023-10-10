import React from 'react'
import { useSelector } from "react-redux";
const Total = () => {

  const count=useSelector((state)=>state.count)
  return (
     <h4 className='mt-3 text-black'>Total Complete Items: {count}</h4>
  )
}

export default Total