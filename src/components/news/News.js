import React, { useContext } from "react"

import { NewsContext } from "./NewsProvider"





export default ({ news, history }) => {

    const { deleteNews } = useContext(NewsContext)
    
    
    // Display conditional buttons

    function LoggedInUserButtons() {

      
      
      if (news.userId === parseInt(localStorage.getItem("currentUserId"))) {
        return (
          <>
            <button onClick={() => {
              history.push(`/news/edit/${news.id}`)
          }}>Edit</button>

          <button onClick={
              () => {debugger
                  deleteNews(news)
                      .then(() => {
                          history.push("/news")
                      })}
          }>Delete</button>
        </>
        )
      }
    } 


    return (
    
        <section className="news--card">
            <div className="news--name">{news.title}</div>
            <div className="news--content">
                <div className="news__synopsis">{news.synopsis}</div>
                <div className="news__url">{news.url}</div>
                <div className="news__author__container"> 
                    <div className="news__author">posted by {news.user.name}</div>
                    <div className="news__author">posted on {new Date(news.date).toLocaleDateString('en-US')} </div>
                </div>
            </div>
            <div>{LoggedInUserButtons()}</div>
            
            
            {/* <button onClick={() => {
                    history.push(`/news/edit/${news.id}`)
                }}>Edit
            </button> */}
    
            {/* ask and research object destructering!!!! */}
    
    
    
        </section>
    )






}




















// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 










