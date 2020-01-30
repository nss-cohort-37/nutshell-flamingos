import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import {FriendsContext} from "../user/FriendsProvider"
import News from "./News"
// import "./Animals.css"


export default (props) => {
  const { news } = useContext(NewsContext)
  const {friends} = useContext(FriendsContext)
  const currentUser = parseInt(locatStorage.getItem("currentUserId"), 10)
  const currentUserFriendsNews =
  currentUserFriendsNews.map(friend => {
    const currentFriendNews = events.filter(evt => evt.userId === friend.id)
  })
  

  return (
    <div className="news">
      <h1>News</h1>
      <button onClick={ 
        () => props.history.push("/news/create")}>
        Add News
          </button>
      <article className="newsList">


        {
          currentUserFriendsNews.map(event => {
            return <Event key={event.id} event={event}/>


          })

        }
      </article>
    </div>
  )
}










// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 