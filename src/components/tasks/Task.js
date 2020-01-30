import React from "react"
import "./Tasks.css"

export default ({ task }) => (
    <section className="task">
        <h3 className="task__name">
        { task.text }
        </h3>
        <button className="complete__task">Complete</button>
    </section>
)




// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 