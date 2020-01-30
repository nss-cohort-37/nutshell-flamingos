import React, { useContext } from "react"
import { TasksContext } from "./TasksProvider"
import Task from "./Task"
import "./Tasks.css"




export default (props) => {
  const { tasks } = useContext(TasksContext)
  const  currentUser  = parseInt(localStorage.getItem("currentUserId"), 10)
  

  return (
      <>
          <h1>Tasks</h1>

          <button onClick={() => props.history.push("/tasks/create")}>
            Save Task
          </button>
          <div className="tasks">
              {
                  tasks.map(task => {
                      return <Task key={task.id} task={task} />
                  })
              }
          </div>
      </>
  )
}












// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 