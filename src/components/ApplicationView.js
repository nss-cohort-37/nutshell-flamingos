import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./user/UserProvider"
import { NewsProvider } from "./news/NewsProvider";
import { EventsProvider } from "./events/EventsProvider";
import { FriendsProvider } from "./user/FriendsProvider";
<<<<<<< HEAD
import TasksForm from "./tasks/TasksForm"
import { TasksProvider } from "./tasks/TasksProvider";
import NewsForm from "./news/NewsForm"
import NewsList from "./news/NewsList";
=======
import {MessagesProvider} from "./messages/MessagesProvider";
import { TasksProvider } from "./tasks/TasksProvider";

import TasksForm from "./tasks/TasksForm";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import EventsList from "./events/EventsList";
>>>>>>> 3997248d39cc0330659baa419e7c913e5c523cf8
import EventsForm from "./events/EventsForm";
import MessagesList from "./messages/MessagesList";
import FriendsList from "./user/FriendsList";
import TasksList from "./tasks/TasksList"

// renders the different page views utilising route
export default (props) => {
    return (
        <>
            <UserProvider>
                <FriendsProvider>
                <Route  path="/" render={
                        props => <FriendsList {...props} />
                    } />
                </FriendsProvider>
            </UserProvider>

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

            <TasksProvider>
                  <Route path="/" render ={
                            props => <TasksList { ...props} />
                        } />
                  <Route path="/tasks/create" render={
                                  props => <TasksForm {...props} />
                              } />
                  <Route path="/tasks/edit/:taskId(\d+)" render={
                        props => <TasksForm {...props} />
                    } />

            </TasksProvider>
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

                    <Route exact path="/events/create" render={
                        props => <EventsForm {...props} />
                    } />

                    <Route path="/events/edit/:eventsId(\d+)" render={
                        props => <EventsForm {...props} />
                    } />
                </EventsProvider>
            </FriendsProvider>

           
        </>
    )
}

// You need to use the history.push() method again to take the user to a new view. Reference the code above to see how to do the following two tasks.

// Provide the React Router history object to the EmployeeForm component by refactoring ApplicationViews.
// Route the user to /employees.