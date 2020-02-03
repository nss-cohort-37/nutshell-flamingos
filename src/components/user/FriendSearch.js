import React from "react"
import "./Friends.css"

export default ({ user }) => (
    <section className="friend">
        <h3 className="friend--name">
        { user.name }
        </h3>
        <button className="friend--message">Add As Friend</button>
    </section>
)
