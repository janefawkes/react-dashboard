import React, { useState } from "react"
import "../scss/Sidebar.scss"
import logo from "../../src/img/logo.png"
import { SidebarData } from "../data/Data"
import { UilSignOutAlt } from "@iconscout/react-unicons";

export default function Sidebar() {

    const [selected, setSelected] = useState(0);
    
    return (
        <>
        <div className="sidebar">
            <section className="logo">
                <img src={logo} className="logo--img" alt="Shops Logo"/>
                <span>
                    Sh<span className="pink--text">o</span>ps
                </span>
            </section>
            <section className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? "menu--item active":"menu--item"} 
                        key={index}
                        onClick={()=>setSelected(index)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                
                <div className="menu--item">
                    <UilSignOutAlt/> {/* sign out icon */}
                </div>
            </section>
        </div>
        </>
    )
}