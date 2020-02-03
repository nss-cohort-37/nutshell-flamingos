import React, { useContext, useState, useRef } from "react"
import { FriendsContext } from "../user/FriendsProvider"
import { UserContext } from "./UserProvider";
import Friend from "./Friend";
import { array } from "prop-types";
import FriendSearch from "./FriendSearch";



export default (props) => {
  const { friends, addFriends } = useContext(FriendsContext)
  const { users } = useContext(UserContext)
  // const [nonFriend, setNonFriend] = useState({});
//   const [friend, setFriend] = useState({});
  const friendName = useRef("");
  const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)


  const usersFriends = friends.filter(f => f.userId === currentUser)

  let arrayOfUsersFriendsObjects =[]
    
    usersFriends.map(friend => {
         users.find(
                u => {
                    if (u.id === friend.friendId) {
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
            const foundExistingFriend = friends.find(
              f =>
                f.userId === foundUserArray[0].id &&
                currentUser === f.friendId
            );
            if (currentUser !== foundUserArray[0].id) {
              if (foundExistingFriend === undefined) {
                window.confirm(`Would you like to add ${foundUserArray[0].name} as a friend?`)
                addFriends({
                  friendId: foundUserArray[0].id,
                  userId: currentUser
                })
                .then(() => {friendName.current.value = ""})
      
              } else {
                alert(`You are already friends with ${foundUserArray[0].name}`)
                {friendName.current.value = ""}
      
              }
            } else {
              alert("You cannot be friends with yourself")
              {friendName.current.value = ""}
      
            }
          }
      };
        
      console.log(searchResultsArray);
      
  return (
          
    <div className="friends">
      <h1 className="page--title">Friends</h1>
      <div className="friendForm">
        <input
            type="text"
            name="name"
            id="friendName"
            ref={friendName}
            required
            className="form-control"
            className="friendSearch"
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
            }}
            className="btn btn-primary"
            className="friendbtn"
        >Add</button>
      </div>

      <article className="friendsList">
        {
          arrayOfUsersFriendsObjects.map(user => {
            return <Friend key={user.id} user={user} props={props}/>
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