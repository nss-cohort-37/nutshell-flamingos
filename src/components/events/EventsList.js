
import React, { useContext } from "react"
import { EventsContext } from "./EventsProvider"
import { FriendsContext } from "../user/FriendsProvider"
import Event from "./Event"
import "./Events.css"

export default (props) => {
    const { events } = useContext(EventsContext)
    const { friends } = useContext(FriendsContext)
    const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)
    let friendsEventArray = []

    friends.map(friend => {
        if (friend.userId === currentUser) {
            events.filter(
                n => {
                    if (n.userId === friend.friendId) {
                        friendsEventArray.push(n)
                    }
                })
        }
    })

    const currentUserEvents = events.filter(events => events.userId === currentUser)
    const combinedEventsArray = currentUserEvents.concat(friendsEventArray)




    return (
            <div className="events">
                <h1>Events</h1>

                <button onClick={() => props.history.push("/events/create")}>
                    New Event
                </button>
                <article className="eventList">

                    {
                        combinedEventsArray.map(event => {
                            return <Event key={event.id} event={event} {...props} />
                        })
                    }
                </article>
            </div>
    )
}


// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 