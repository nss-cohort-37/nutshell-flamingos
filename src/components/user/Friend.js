import React from "react"
import "./Friends.css"

export default ({ user }) => (
    <section className="friend--card">
        <h3 className="friend--name">
        { user.name }
        </h3>
        <button className="friend--message">message</button>
        {/* <button onClick={() => props.history.push("/message/create")}>
            Message
          </button> */}
    </section>
)




// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 