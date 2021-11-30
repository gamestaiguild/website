import React from 'react'
import logo from "../../assets/logo.svg";
import './loader.scss'

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-cover">
                <div className="logo-container">
                   <img src={logo} alt="logo" />
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
