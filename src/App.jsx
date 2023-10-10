import Completed from "./comp/Completed"
import Pending from "./comp/Pending"
import TodoForm from "./comp/TodoForm"
import Todolist from "./comp/Todolist"
import Total from "./comp/Total"


function App() {


  return (
    <>
    <div className="flex justify-center items-center pt-[10%]">

    <div className='container bg-white w-[30%] rounded-lg p-4 mt-5'>
      <h1>MY TODO LIST</h1>
      <TodoForm/>
      <Todolist/>
      <Pending/>
      <Completed/>
      <Total/>
  
    </div>
    </div>
    </>
  )
}

export default App
