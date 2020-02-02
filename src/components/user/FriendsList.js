import React, { useContext } from "react"
import { FriendsContext } from "../user/FriendsProvider"
import { UserContext } from "./UserProvider";
import Friend from "./Friend";
import { array } from "prop-types";




export default (props) => {
  const { friends } = useContext(FriendsContext)
  const { users } = useContext(UserContext)
  const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)
  const usersFriends = friends.filter(f => f.userId === currentUser)
  console.log(usersFriends);
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
              console.log(arrayOfUsersFriendsObjects);
              
    // const currentUserNews = news.filter(news => news.userId === currentUser)
    // const combinedNewsArray = currentUserNews.concat(friendsNewsArray)
    



  return (
    <div className="stickyWrapper">
        <div className="friends">
          <h1>Friends</h1>
        
          <article className="friendsList">
            {
              
              arrayOfUsersFriendsObjects.map(user => {
                return <Friend key={user.id} user={user} />
              })
              
            }
          </article>
        </div>
    </div>
  )
}












// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 