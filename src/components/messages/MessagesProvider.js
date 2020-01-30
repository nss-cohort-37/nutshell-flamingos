// export event context
// export get add delete edit
// 
let messages = [];

export const useMessages = () => messages.slice();

export const getMessages = () =>
  fetch("http://localhost:8088/messages?_expand=user")
    .then(res => res.json())
    .then(parsedMessages => messages = parsedMessages);

export const editMessages = messagesObject => {
  return fetch(`http://localhost:8088/messages/${messagesObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(messagesObject)
  }).then(getMessages);
};

export const deleteMessages = messagesId => {
  return fetch(`http://localhost:8088/messages/${messagesId}`, {
    method: "DELETE"
  }).then(getMessages);
};

export const saveMessages = messages => {
  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(messages)
  }).then(getMessages);
};
