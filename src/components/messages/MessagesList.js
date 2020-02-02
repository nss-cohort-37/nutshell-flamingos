// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 
import React, { useContext } from "react"
import { MessagesContext } from "./MessagesProvider"
import Message from "./Message"
import "./Message"





export default (props) => {
  const { messages } = useContext(MessagesContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserMessages = messages.filter(message => message.userId === currentUserId)

  return (
      <>
      <div className= "messagesContainer">
          <h1>Messages</h1>

          <button onClick={() => props.history.push("/message/create")}>
            New Message
          </button>
          <div className="message">
              {
                  currentUserMessages.map(message => {
                    console.log("Displaying tasks")
                      return <Message key={message.id} message={message} />
                  })
              }
          </div>
      </div>
      </>
  )
}
