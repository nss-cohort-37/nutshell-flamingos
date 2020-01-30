import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NewsContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NewsProvider = (props) => {
    const [news, setNews] = useState([])

    const getNews = () => {
        return fetch("http://localhost:8088/news")
            .then(res => res.json())
            .then(setNews)
    }

    const addNews = news => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    const editNews = news => {
        return fetch(`http://localhost:8088/news/${news.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    const deleteNews = newsId => {
        return fetch(`http://localhost:8088/news/${newsId}`, {
            method: "DELETE"
        })
            .then(getNews)
    }

    /*
        Load all News when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNews()
    }, [])

    useEffect(() => {
        console.log("****  NEWS APPLICATION STATE CHANGED  ****")
        
    }, [news])

    return (
        <NewsContext.Provider value={{
            news, addNews, deleteNews, editNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

