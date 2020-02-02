import React, { useContext, useState, useEffect } from "react"
import { NewsContext } from "./NewsProvider"



export default props => {
  // const { locations } = useContext(LocationContext)
  const { addNews, news, editNews } = useContext(NewsContext)
  const [newsies, setNews] = useState({})

  const editMode = props.match.params.hasOwnProperty("newsId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newNews = Object.assign({}, newsies)
    newNews[event.target.name] = event.target.value
    setNews(newNews)
  }

  const setDefaults = () => {
    if (editMode) {
      const newsId = parseInt(props.match.params.newsId)
      const selectedNews = news.find(n => n.id === newsId) || {}
      setNews(selectedNews)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [news])

  const constructNewNews = () => {
    

    if (editMode) {
      editNews({
        id: newsies.id,
        title: newsies.title,
        synopsis: newsies.synopsis,
        url: newsies.url,
        userId: parseInt(localStorage.getItem("currentUserId")),
        date: Date.now()
      })
        .then(() => props.history.push("/news"))
    } else {
      addNews({
        
        title: newsies.title,
        synopsis: newsies.synopsis,
        url: newsies.url,
        userId: parseInt(localStorage.getItem("currentUserId")),
        date: Date.now()
      })
        .then(() => props.history.push("/news"))
    }

  }

  return (
   

    <form className="newsNews">
      <h2 className="newsNews__title">{editMode ? "Update News" : "Add News"}</h2>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">News name: </label>
          <input type="text" name="title" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="News title"
            defaultValue={newsies.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="synopsis">News synopsis: </label>
          <input type="text" name="synopsis" required className="form-control"
            proptype="varchar"
            placeholder="News synopsis"
            defaultValue={newsies.synopsis}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="url">Url: </label>
          <input type="text" name="url" className="form-control"
            proptype="varchar"
            placeholder="Url"
            value={newsies.url}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <button type="submit"
        onClick={evt => {debugger
          evt.preventDefault()
          constructNewNews()
        }}
        className="btn btn-primary">
        {editMode ? "Save Updates" : "Save News"}
      </button>
    </form>
  )
}










// contorl component
// handle edit functionality and building new event object
// render event form
// 