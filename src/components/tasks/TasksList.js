import React, { useContext } from "react"
import { TaskContext } from "./TasksProvider"
import Task from "./Task"
import "./Tasks.css"




export default (props) => {
  const { tasks } = useContext(TaskContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserTasks = tasks.filter(task => task.userId === currentUserId)

  return (
      <>
      <aside className="taskContainer">

          <h1 className="page--title">Tasks</h1>

          <button onClick={() => props.history.push("/tasks/create")}>
            New Task
          </button>
          <div className="tasks">
              {
                  currentUserTasks.map(task => {
                    console.log("Displaying tasks")
                      return <Task {...props} key={task.id} task={task} />
                  })
              }
          </div>
      </aside>
      </>
  )
}












// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 