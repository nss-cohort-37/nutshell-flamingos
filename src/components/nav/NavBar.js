import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <div className="icon--logo">
             <img className="icon" src={require ('./flamingo.svg')}/>
             <div className="logo"> flamingo</div>

            </div>
            <li className="navbar__item active">
                <img className="nav--icon" src={require ('./mail.svg')}/>
                <Link className="navbar__link" to="/">Messages</Link>
            </li>
            <li className="navbar__item">
                <img className="nav--icon" src={require ('./news.svg')}/>
                <Link className="navbar__link" to="/news">News</Link>
            </li>
            <li className="navbar__item">       

                <img className="nav--icon" src={require ('./event.svg')}/>
                <Link className="navbar__link" to="/events">
                    Events
                    </Link>
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
// what is this      ⬆
            }
        </ul>
    )
}






// renders the navbar jsx which has indvidual link different application views
// handles logout function
// 