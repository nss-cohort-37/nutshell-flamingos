import React, { useContext } from "react";

import { MessagesContext } from "./MessagesProvider";
import "./Messages.css"

export default ({ message, history }) => {
  const { deleteMessage } = useContext(MessagesContext);

  // Display conditional buttons

  function LoggedInUserButtons() {
    if (message.userId === parseInt(localStorage.getItem("currentUserId"))) {
      return (
        <>
          <button
            onClick={() => {
              history.push(`/messages/edit/${message.id}`);
            }}
          >
            Edit
          </button>

          
        </>
      );
    }
  }

  return (
    <section className="message--card">
      <div className="message--info">
        <div className="Message__url">{message.user.name} - </div>
        <div className="message--name">{message.message}</div>
      </div>

      <div className="news__author">posted on {new Date(message.date).toLocaleDateString('en-US')}</div>
      <div>{LoggedInUserButtons()}</div>

      {/* <button onClick={() => {
                    history.push(`/message/edit/${message.id}`)
                }}>Edit
            </button> */}
    </section>
  );
};

// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
//
