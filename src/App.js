import React from "react"
import "./scss/App.scss"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

export default function App() {
    return (
    <>
        <div className="app">
            <div className="app--glass">
                <Sidebar />
                <Main />
                <div></div>
            </div>
        </div>
    </>
    )
}