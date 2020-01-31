import React from "react"



export default ({ news }) => (
    <section className="news_List">
        <div className="news__title">{news.title}</div>
        <div className="news__synopsis">{news.synopsis}</div>
        <div className="news__url">{news.url}</div>
        <div className="news__url">posted by {news.user.name}</div>
        <div className="news__url">posted by {news.date}</div>



    </section>
)














// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 