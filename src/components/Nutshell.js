
import React from "react"
import { Route, Redirect } from "react-router-dom"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./Nutshell.css"
import ApplicationView from "./ApplicationView";
import { TasksProvider } from "./tasks/TasksProvider"
import TasksList from "./tasks/TasksList"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("currentUserId")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />

                        <div className="ApplicationViews">
                            <Route render={props => <ApplicationView {...props} />} />
                        </div>
                    
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