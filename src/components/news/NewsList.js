import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import {FriendsContext} from "../user/FriendsProvider"
import News from "./News"
// import "./Animals.css"


export default (props) => {
  const { news } = useContext(NewsContext)
  const {friends} = useContext(FriendsContext)
  const currentUser = parseInt(locatStorage.getItem("currentUserId"), 10)
  const currentUserFriends = friends.filter(friend => friend.userId === currentUser)
    const currentUserFriendsNews = 
        currentUserFriends.map(friend => {
            const currentFriendsNews = news.filter(n => n.userId === friend.id)
            return currentFriendsNews
  

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
          currentUserFriendsNews.map(news => {
            return <Event key={news.id} news={news}/>


          })

        }
      </article>
    </div>
  )
}










// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 