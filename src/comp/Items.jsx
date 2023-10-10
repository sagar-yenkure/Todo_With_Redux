import React from 'react'
import { useDispatch } from 'react-redux'
import { removetodo } from '../Redux/Todoslice'
const Items = (props) => {

	const dispatch=useDispatch()
    const {completed,title ,id}=props

const handleremove=()=>{
	console.log("this is the id "+id)
	dispatch(removetodo(id))
}
  return (
    <>
    <li className={`list-group-item my-3 ${completed?'bg-blue-300':""}`}>
			<div  className='flex justify-between  rounded-lg p-2'>
				<span className='flex items-center'>
					{/* <input type='checkbox' className='mr-3' checked={completed}></input> */}
					<h1>{title}</h1>
				</span>
				{/* onClick={()=>dispatch(removetodo(id))}  */}
				<button onClick={handleremove} className='btn bg-red-400 p-2 rounded-lg'>Delete</button>
			</div>
		</li>
    </>
  )  
}

export default Items