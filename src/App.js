import React from "react"
import "./scss/App.scss"
import Sidebar from "./components/Sidebar"

export default function App() {
    return (
    <>
        <div className="app">
            <div className="app--glass">
                <div><Sidebar /></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
    )
}