
// build the function creates the jsx for an message card
// have an edit and delete button
// display the Message, name, date, who posted, and url
// 
import React from "react"
import "./Messages.css"

export default ({ message }) => (
    <section className="message--card">
        <h3 className="message--name">
        { message.message }
        </h3>
        <button className="complete__message">Complete</button>
    </section>
)
