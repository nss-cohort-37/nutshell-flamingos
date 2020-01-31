import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import { FriendsContext } from "../user/FriendsProvider"
import News from "./News"

// -daniel and mac


export default (props) => {
  const { news } = useContext(NewsContext)
  const { friends } = useContext(FriendsContext)
  const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)
  let friendsNewsArray = []

    friends.map(friend => {
        if (friend.userId === currentUser) {
            news.filter(
                n => {
                    if (n.userId === friend.friendId) {
                        friendsNewsArray.push(n)
                    }
                  })
                }
              })

    const currentUserNews = news.filter(news => news.userId === currentUser)
    const combinedNewsArray = currentUserNews.concat(friendsNewsArray)
    



  return (
    <div className="news">
      <h1>News</h1>
      <button onClick={
        () => props.history.push("/news/create")}>
        Add News
          </button>
      <article className="newsList">
        {
          combinedNewsArray.map(news => {
            return <News {...props} key={news.id} news={news} />
            
          })

        }
        
      </article>
    </div>
  )
}












// have a link to route user to event form
// filter over array of friends and invoke .js function before every event whos userId matches current userId
// 