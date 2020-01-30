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
        return fetch("http://localhost:8088/newss")
            .then(res => res.json())
            .then(setNews)
    }

    const addNews = News => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNewss()
    }, [])

    useEffect(() => {
        console.log("****  News APPLICATION STATE CHANGED  ****")
        
    }, [news])

    return (
        <NewsContext.Provider value={{
            news, addNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

