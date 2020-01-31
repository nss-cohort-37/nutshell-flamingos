import React, { useContext, useState, useEffect } from "react"
import { TasksContext } from "./TasksProvider"



export default props => {
    const { addTasks, tasks, updateTask } = useContext(TasksContext)
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
                updateTask({
                  
                    text: task.text,
                  
                 
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
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        proptype="varchar"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={animal.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                        proptype="varchar"
                        value={animal.treatment}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
                        </fieldset> */}
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