import React, { useContext } from "react";

import { MessageContext } from "./MessageProvider";

export default ({ message, history }) => {
  const { deleteMessage } = useContext(MessageContext);

  // Display conditional buttons

  function LoggedInUserButtons() {
    if (message.userId === parseInt(localStorage.getItem("currentUserId"))) {
      return (
        <>
          <button
            onClick={() => {
              history.push(`/message/edit/${message.id}`);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => {
              deleteMessage(message).then(() => {
                history.push("/message");
              });
            }}
          >
            Delete
          </button>
        </>
      );
    }
  }

  return (
    <section className="Message_List">
      <div className="Message__title">{message.title}</div>
      <div className="Message__synopsis">{message.synopsis}</div>
      <div className="Message__url">{message.url}</div>
      <div className="Message__url">posted by {message.user.name}</div>
      <div className="Message__url">posted by {message.date}</div>
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
