import React, { useContext, useState, useEffect } from "react";
import { MessagesContext } from "./MessagesProvider";

export default props => {
  const { messages, addMessages, editMessages } = useContext(MessagesContext);
  const [message, setMessage] = useState({});

  const editMode = props.match.params.hasOwnProperty("messagesId");

  const handleControlledInputChange = msg => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newMessage = Object.assign({}, message);
    newMessage[msg.target.name] = msg.target.value;
    setMessage(newMessage);
  };

  const setDefaults = () => {
    if (editMode) {
      const messagesId = parseInt(props.match.params.messagesId);
      const selectedMessages = messages.find(e => e.id === messagesId) || {};
      setMessage(selectedMessages);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [messages]);

  const constructNewMessage = () => {
    if (editMode) {
      editMessages({
        id: message.id,
        message: message.text,
        date: Date.now(),
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/"));
    } else {
      addMessages({
        message: message.text,
        date: Date.now(),
        userId: parseInt(localStorage.getItem("currentUserId")),
    }) .then(() => props.history.push("/"));
  };
  }
  return (
    <form className="newMessage">
      <h2 className="newMessage__name">
        {editMode ? "Update Messages" : "Add Message"}
      </h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="text">Message message: </label>
          <input
            type="text"
            name="text"
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Message message"
            defaultValue={message.text}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={msg => {
          msg.preventDefault();
          constructNewMessage();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Save Message"}
      </button>
    </form>
  );
}
