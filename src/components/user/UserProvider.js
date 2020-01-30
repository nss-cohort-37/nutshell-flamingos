import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/
export const UserContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const UserProvider = (props) => {
  const [users, setUsers] = useState([])
  
  const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(res => res.json())
    .then(setUsers)
  }
  
  const addUsers = users => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(users)
    })
    .then(getUsers)
  }
  
  /*
  Load all animals when the component is mounted. Ensure that
  an empty array is the second argument to avoid infinite loop.
  */
 useEffect(() => {
   getUsers()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  USERS APPLICATION STATE CHANGED  ****")
    
    // }, [users])
    
    return (
      <UserContext.Provider value={{
        users, addUsers
      }}>
            {props.children}
        </UserContext.Provider>
    )
  }
  // export event context
  // export get add delete edit





// export event context
// export get add delete edit
// 