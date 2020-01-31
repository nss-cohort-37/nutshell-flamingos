import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./user/UserProvider"
import { NewsProvider } from "./news/NewsProvider";
import { EventsProvider } from "./events/EventsProvider";
import EventsList from "./events/EventsList";
import { FriendsProvider } from "./user/FriendsProvider";
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import {MessagesProvider} from "./messages/MessagesProvider"
import MessagesList from "./messages/MessagesList"

// renders the different page views utilising route
export default (props) => {
    return (
        <>
            <UserProvider>

            </UserProvider>

            <NewsProvider>

            </NewsProvider>



            <NewsProvider>
                <FriendsProvider>
                    <Route exact path="/news" render={
                        props => <NewsList {...props} />
                    } />
                    <Route exact path="/news/create" render={
                        props => <NewsForm {...props} />
                    } />





                    <Route path="/news/edit/:newsId(\d+)" render={
                        props => <NewsForm {...props} />
                    } />
                </FriendsProvider>
            </NewsProvider>

            <MessagesProvider>
                
                    <Route exact path="/" render={
                        props => <MessagesList {...props} />
                    } />
                   
                
            </MessagesProvider>

            <FriendsProvider>
                <EventsProvider>
                    <Route exact path="/events" render={
                        props => <EventsList {...props} />
                    } />
                </EventsProvider>
            </FriendsProvider>
        </>
    )
}

// You need to use the history.push() method again to take the user to a new view. Reference the code above to see how to do the following two tasks.

// Provide the React Router history object to the EmployeeForm component by refactoring ApplicationViews.
// Route the user to /employees.