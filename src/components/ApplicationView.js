import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./user/UserProvider"
import { TasksProvider } from "./tasks/TasksProvider"
import { NewsProvider } from "./news/NewsProvider";



// renders the different page views utilising route
export default (props) => {
    return (
        <>
            <UserProvider>
                
            </UserProvider>

            <TasksProvider>
              
            </TasksProvider>
            
            <NewsProvider>
                <FriendProvider>
                    <Route path="/employees/create" render={
                    props => <NewsList {...props} />
                    } />
                </FriendProvider>
            </NewsProvider>

            
            
        </>
    )
}

// You need to use the history.push() method again to take the user to a new view. Reference the code above to see how to do the following two tasks.

// Provide the React Router history object to the EmployeeForm component by refactoring ApplicationViews.
// Route the user to /employees.