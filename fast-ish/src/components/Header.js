import React from "react";
import "../styles/header.css"
import logo from "../assets/fastish.jpeg"
import logo2 from "../assets/fastish3.jpeg"
import NavBar from "./NavBar";


export const Header = () => {


    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                    <img src={logo2} alt="logo"/>
                </div>
                <div className="nav-bar-container">
                </div>
            </div>
            <div className="logo-container">
                <NavBar />
            </div>
        </div>
    )
}