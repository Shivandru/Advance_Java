import { useState } from 'react'
import './App.css'

function App() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  function handleChange(event){
    setTask(event.target.value)
  }
  function addItem(){
    let newTask = {
      id: Math.random(),
      title: task,
      status: false,
    }
    let newArr = [...taskArr, newTask]
    setTaskArr(newArr);
    setTask("")
  }
  function del(taskId){
    let newArray = taskArr.filter((ele)=> taskId != ele.id)
    setTaskArr(newArray)
  }
  
  function reset(taskId){
     setTaskArr(taskArr.map((ele)=>(
      taskId == ele.id ? {...ele, status: !ele.status} : ele
     )))
  }


  return(
    <>
    <div className='head'>
      <h2>Input Your Task</h2>
      <input type="text" onChange={handleChange} value={task}/>
      <button onClick={addItem} id='addTaskBtn'>ADD TASK</button>
    </div>
    <div className='taskList'>
      {
        taskArr.map((ele)=> (
          <div className='card'>
            <h4>Task: {ele.title}</h4>
            <p>Status: { ele.status ? "Completed" : "Not Completed"}</p>
            <button onClick={()=>{reset(ele.id)}} id='resetBtn'><img src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" alt="logo" className='btn' /></button>
            <button onClick={()=>{del(ele.id)}} id='delBtn'><img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="logo" className='btn'/></button>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
