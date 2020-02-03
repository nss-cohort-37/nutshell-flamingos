import React from "react"



export default ({ news, history }) => (
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
        <button onClick={() => {
                history.push(`/news/edit/${news.id}`)
            }}>Edit
        </button>

        {/* ask and research object destructering!!!! */}



    </section>
)














// build the function creates the jsx for an event card
// have an edit and delete button
// display the event, name, date, who posted, and url
// 