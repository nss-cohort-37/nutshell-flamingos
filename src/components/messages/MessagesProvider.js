import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/

export const MessagesContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const MessagesProvider = (props) => {
  const [messages, setMessages] = useState([])
  
  const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
    .then(res => res.json())
    .then(setMessages)
  }
  
  const addMessages = messages => {
    return fetch("http://localhost:8088/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messages)
    })
    .then(getMessages)
  }
  
  const editMessages = messages => {
    return fetch(`http://localhost:8088/messages/${messages.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messages)
    })
        .then(getMessages)
}

const deleteMessages = messagesId => {
    return fetch(`http://localhost:8088/messages/${messagesId}`, {
        method: "DELETE"
    })
        .then(getMessages)
}

 useEffect(() => {
   getMessages()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  Messages APPLICATION STATE CHANGED  ****")
    
    // }, [messages])
    
    return (
      <MessagesContext.Provider value={{
        messages, addMessages, editMessages, deleteMessages
      }}>
            {props.children}
        </MessagesContext.Provider>
    )
  }



  // export message context
  // export get add delete edit
