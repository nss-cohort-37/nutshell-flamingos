import React, { useContext, useState, useEffect } from "react";
import { EventsContext } from "./EventsProvider";

export default props => {
  const { events, addEvents, editEvents } = useContext(EventsContext);
  const [event, setEvents] = useState({});

  const editMode = props.match.params.hasOwnProperty("eventsId");

  const handleControlledInputChange = evt => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newEvent = Object.assign({}, event);
    newEvent[evt.target.name] = evt.target.value;
    setEvents(newEvent);
  };

  const setDefaults = () => {
    if (editMode) {
      const eventsId = parseInt(props.match.params.eventsId);
      const selectedEvent = events.find(e => e.id === eventsId) || {};
      setEvents(selectedEvent);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [events]);

  const constructNewEvent = () => {
    if (editMode) {
      editEvents({
        id: event.id,
        name: event.name,
        location: event.location,
        date: event.date,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/events"));
    } else {
      addEvents({
        name: event.name,
        location: event.location,
        date: event.date,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/events"));
    }
  };

  return (
    <form className="newEvent">
      <h2 className="newEvent__name">
        {editMode ? "Update Event" : "Add Event"}
      </h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Event name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Event name"
            defaultValue={event.name}
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
            defaultValue={event.location}
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
            value={event.date}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          constructNewEvent();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Save Event"}
      </button>
    </form>
  );
};

// contorl component
// handle edit functionality and building new event object
// render event form
//
