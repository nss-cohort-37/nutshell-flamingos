import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/

export const EventsContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const EventsProvider = (props) => {
  const [events, setEvents] = useState([])
  
  const getEvents = () => {
    return fetch("http://localhost:8088/events?_expand=user")
    .then(res => res.json())
    .then(setEvents)
  }
  
  const addEvents = events => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(events)
    })
    .then(getEvents)
  }
  
  const editEvents = events => {
    return fetch(`http://localhost:8088/events/${events.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
        .then(getEvents)
}

const deleteEevents = eventsId => {
    return fetch(`http://localhost:8088/events/${eventsId}`, {
        method: "DELETE"
    })
        .then(getEvents)
}

 useEffect(() => {
   getEvents()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  Events APPLICATION STATE CHANGED  ****")
    
    // }, [Events])
    
    return (
      <EventsContext.Provider value={{
        events, addEvents, editEvents, deleteEevents
      }}>
            {props.children}
        </EventsContext.Provider>
    )
  }



  // export event context
  // export get add delete edit
