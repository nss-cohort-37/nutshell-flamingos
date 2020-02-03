import React, { useContext, useState, useEffect } from "react";
import { MessagesContext } from "./MessagesProvider";

export default props => {
  const { Messages, addMessages, editMessages } = useContext(MessagesContext);
  const [Message, setMessage] = useState({});

  const editMode = props.match.params.hasOwnProperty("MessagesId");

  const handleControlledInputChange = msg => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newMessage = Object.assign({}, Messages);
    newMessage[msg.target.name] = msg.target.value;
    setMessage(newMessage);
  };

     const setDefaults = () => {
    if (editMode) {
      const MessagesId = parseInt(props.match.params.MessagesId);
      const selectedMessages = Messages.find(e => e.id === MessagesId) || {};
      setMessage(selectedMessages);
    }
  };

  useEffect(() => {
     setDefaults();
  }, [Messages]);

  const constructNewMessage = () => {
    if (editMode) {
      editMessages({
        id: Message.id,
        name: Message.name,
        location: Message.location,
        date: Message.date,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/Messages"));
    } else {
      addMessages({
        name: Message.name,
        location: Message.location,
        date: Message.date,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/Messages"));
    }
  };

  return (
    <form className="newMessage">
      <h2 className="newMessage__name">
        {editMode ? "Update Message" : "Add Message"}
      </h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Message name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Message name"
            defaultValue={Message.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            required
            className="form-control"
            proptype="varchar"
            placeholder="ex: Nashville"
            defaultValue={Message.location}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            name="date"
            className="form-control"
            proptype="varchar"
            placeholder="ex: 9/16/2020"
            value={Message.date}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={msg => {
          msg.prMessageDefault();
          constructNewMessage();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Save Message"}
      </button>
    </form>
  );
};

// contorl component
// handle edit functionality and building new Messages object
// render Messages form
//
