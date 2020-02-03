import React, { useContext } from "react"
import "./Tasks.css"
import { TaskContext } from "./TasksProvider"

export default ({ task, history }) => {
  const { deleteTask, patchTask } = useContext(TaskContext)


const checkbox = ()=>{
  let checkboxValue = true
  if(task.isCompleted === true){
      return <>
      <input type="checkbox" name="checkbox" onChange={()=>{
          checkboxValue = false
          const patchedTask= {
              isCompleted:checkboxValue,
              id: task.id
          }
          patchTask(patchedTask).then(()=> history.push("/tasks"))
      }} checked></input>
      
      </>
  }else{
      checkboxValue = true
      
      return <>
      <input type="checkbox" name="checkbox" onChange={()=>{
          const patchedTask= {
              isCompleted:checkboxValue,
              id: task.id
          }
          patchTask(patchedTask).then(()=> history.push("/tasks"))
      }}></input>
      <button onClick={() => {
        history.push(`/tasks/edit/${task.id}`)
      }}>Edit</button>
      </>
  }
}

return (
  
  <section className="task">

      
      <div>{task.text}</div>
    
      <label>Completed?</label>
      {checkbox()}
      





         
      <button className="deleteTaskButton" onClick={()=>{

          deleteTask(task).then(()=> history.push("/tasks"))
      }
      }>Delete</button>
  </section>
)

  }



// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 