
import React, { useContext } from "react"
import { EventsContext } from "./EventsProvider"
import { FriendsContext } from "../user/FriendsProvider"
import Event from "./Event"
import "./Events.css"

export default (props) => {
    const { events } = useContext(EventsContext)
    const { friends } = useContext(FriendsContext)
    const currentUser = parseInt(localStorage.getItem("currentUserId"),10)
    const currentUserFriends = friends.filter(friend => friend.userId === currentUser)
    const currentUserFriendEvent = 
        currentUserFriends.map(friend => {
            const currentFriendEvent = events.filter(evt => evt.userId === friend.id)
            return currentFriendEvent
            
        })

    const currentUserEvents = events.filter(event => event.userId === currentUser)
console.log(currentUserFriendEvent)

    return (
        <>
            <h1>Events</h1>

            <button onClick={() => props.history.push("/events/create")}>
                New Event
            </button>
            <div className="events">

                {
                    currentUserFriendEvent.map(event => {
                        return <Event key={event.id} event={event} />
                    })
                }
            </div>
            <div className="userEvents">

                {
                    currentUserEvents.map(event => {
                        return <Event key={event.id} event={name} />
                    })
                }
            </div>
        </>
    )
}


// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 