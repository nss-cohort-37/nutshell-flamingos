import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Messages</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/news">News</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            
            {
                localStorage.getItem("currentUserId")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("currentUserId")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""

            }
        </ul>
    )
}






// renders the navbar jsx which has indvidual link different application views
// handles logout function
// 