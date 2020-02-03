import React, { useContext, useState, useEffect } from "react"
import { TaskContext } from "./TasksProvider"



export default props => {
    const { addTasks, tasks, editTasks } = useContext(TaskContext)
    const [task, setTask] = useState({})

    const editMode = props.match.params.hasOwnProperty("taskId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newTask = Object.assign({}, task)
        newTask[event.target.name] = event.target.value
        setTask(newTask)
    }

    const setDefaults = () => {
        if (editMode) {
            const taskId = parseInt(props.match.params.taskId)
            const selectedTask = tasks.find(t => t.id === taskId) || {}
            setTask(selectedTask)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [tasks])

    const constructNewTask = () => {
        

        
            if (editMode) {
                editTasks({
                    id: task.id,
                    text: task.text,
                    userId: parseInt(localStorage.getItem("currentUserId"))
                  
                 
                })
                    .then(() => props.history.push("/"))
            } else {
                addTasks({

                    text: task.text,
                    userId: parseInt(localStorage.getItem("currentUserId")),
                    date: Date.now() 
                  
                   
                })
                    .then(() => props.history.push("/"))
            
        }
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">{editMode ? "Edit Task" : "Save Task"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task: </label>
                    <input type="text" name="text" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Task"
                        defaultValue=""
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewTask()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save Task"}
            </button>
        </form>
    )
}




// contorl component
// handle edit functionality and building new event object
// render event form
// 