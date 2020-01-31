import React, { useContext, useState, useRef } from "react"
import { FriendsContext } from "../user/FriendsProvider"
import { UserContext } from "./UserProvider";
import Friend from "./Friend";
import { array } from "prop-types";
import FriendSearch from "./FriendSearch";



export default (props) => {
    const contentTarget = document.querySelector(".friendsSearchList")
  const { friends, addFriends } = useContext(FriendsContext)
  const { users } = useContext(UserContext)
  const [nonFriend, setNonFriend] = useState({});
//   const [friend, setFriend] = useState({});
  const friendName = useRef("");
  const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)


  const usersFriends = friends.filter(f => f.userId === currentUser)

  let arrayOfUsersFriendsObjects =[]
    
    usersFriends.map(friend => {
         users.find(
                u => {
                    if (u.id === friend.friendId) {
                        console.log(u);
                        arrayOfUsersFriendsObjects.push(u)
                        
                    }
                  })
                
              })
              
            
    // const handleControlledInputChange = event => {

    //     const newFriend = Object.assign({}, friend);
    //     newFriend[event.target.name] = event.target.value;
    //     setFriend(newFriend);

    // };

    

    let searchResultsArray = []
    const constructNewFriendArray = () => {
        const searchTerm = friendName.current.value.toUpperCase() 
        
        const foundUserArray = users.filter(user => {
            if (user.name.toUpperCase().includes(searchTerm) || user.email.includes(searchTerm)) {
              return user
            } 
        })
        
        if (foundUserArray[0] === undefined) {
            alert("User not found");
          } else {

              foundUserArray.map(user => {
                    searchResultsArray.push(user)
              })
          }
      };
        
      console.log(searchResultsArray);
      
    const printNewArray = () => {
        contentTarget.innerHTML= 

            searchResultsArray.map(user => {
              return `<h3>${user.name}</h3>`
            }).join("")
  
          
    }
  return (
    <div className="news">
      <h1>Friends</h1>
      <div>
        <input
            type="text"
            name="name"
            id="friendName"
            ref={friendName}
            required
            className="form-control"
            proptype="varchar"
            placeholder="search for a user...   "
            defaultValue={""}
            // onChange={handleControlledInputChange}
        />
            <button
            type="submit"
            onClick={evt => {
            evt.preventDefault();
            constructNewFriendArray();
            printNewArray()
            }}
            className="btn btn-primary"
        >Search</button>
      </div>

      <article className="friendsList">
        {
          arrayOfUsersFriendsObjects.map(user => {
            return <Friend key={user.id} user={user} />
          })

        }
      </article>

      <article className="friendsSearchList">
          

        
      </article>

    </div>
  )
}












// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 