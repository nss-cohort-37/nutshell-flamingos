import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/
export const FriendsContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const FriendsProvider = (props) => {
  const [friends, setFriends] = useState([])
  
  const getFriends = () => {
    return fetch("http://localhost:8088/friends")
    .then(res => res.json())
    .then(setFriends)
  }
  
  const addFriends = friends => {
    return fetch("http://localhost:8088/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(friends)
    })
    .then(getFriends)
  }
  
  /*
  Load all animals when the component is mounted. Ensure that
  an empty array is the second argument to avoid infinite loop.
  */
 useEffect(() => {
   getFriends()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  Friends APPLICATION STATE CHANGED  ****")
    
    // }, [friends])
    
    return (
      <FriendsContext.Provider value={{
        friends, addFriends
      }}>
            {props.children}
        </FriendsContext.Provider>
    )
  }
  // export event context
  // export get add delete edit