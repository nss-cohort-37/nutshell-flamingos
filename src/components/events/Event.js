
import React, {useContext} from "react"
import { EventsContext } from "./EventsProvider"
import "./Events.css"


export default ({ event, history }) => {

    const { deleteEvents } = useContext(EventsContext)

    // Display conditional buttons
    function LoggedInUserButtons() {
      if (event.userId === parseInt(localStorage.getItem("currentUserId"))) {
        return (
          <>
            <button onClick={() => {
              history.push(`/events/edit/${event.id}`)
          }}>Edit</button>

          <button onClick={
              () => {
                  deleteEvents(event)
                      .then(() => {
                          history.push("/events")
                      })}
          }>Delete</button>
        </>
        )
      }
    } 
 

    return(
        <section className="event__list">
            <h4 className="event__name">{ event.name }</h4>
            <div className="event__location">Location: { event.location }</div>
            <div className="event__date">Date: { event.date }</div>
            <div className="event__posted">posted by {event.user.name}</div>

            <div>{LoggedInUserButtons()}</div>

        </section>
    )
}




// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 