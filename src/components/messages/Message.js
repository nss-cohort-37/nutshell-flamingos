
// build the function creates the jsx for an message card
// have an edit and delete button
// display the Message, name, date, who posted, and url
// 
import React from "react"
import "./Messages.css"

export default ({ message }) => (
    <section className="Message">
        <h3 className="Message__name">
        { message.message }
        </h3>
        <button className="complete__message">Complete</button>
    </section>
)
