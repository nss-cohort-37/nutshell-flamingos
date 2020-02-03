// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 
import React, { useContext } from "react"
import { MessagesContext, MessagesProvider } from "./MessagesProvider"
import Message from "./Message"
import "./Message"
import MessageForm from "./MessageForm";
import { Route } from "react-router-dom"







export default (props) => {
  const { messages } = useContext(MessagesContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserMessages = messages.filter(message => message.userId === currentUserId)

  return (
      <>
      <div className= "messagesContainer">
          <h1 className="page--title">Messages</h1>

          <Route exact path="/" render={
                        props => <MessageForm {...props} />
                    } />
               
    
          <div className="message">
              {
                  currentUserMessages.map(message => {
                      return <Message {...props} key={message.id} message={message} />
                  })
              }
          </div>
      </div>
      </>
  )
}
