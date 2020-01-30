
import React from "react"
import { Route, Redirect } from "react-router-dom"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./Nutshell.css"
import ApplicationView from "./ApplicationView";

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("currentUserId")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationView {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)

// renders the navbar and application views login and register routes
// 