
import React from "react"
import "./Events.css"

export default ({ event }) => (
    <section className="event__list">
        <h4 className="event__name">{ event.name }</h4>
        <div className="event__location">Location: { event.location }</div>
        <div className="event__date">Date: { event.date }</div>
        <div className="event__posted">posted by {event.user.name}</div>

        <button className="event__edit">Edit</button>
        <button className="event__delete">Delete</button>
    </section>
)









// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 