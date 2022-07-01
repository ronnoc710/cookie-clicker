import React from "react";
import bigCookie from "./Images/cookie.png";
import "./App.css"

export default function App() {

  return (
    <div className="game">
      <div className="section-top">
        <div className="cookie-container">
          <button className="big-cookie-btn">
            <img src={bigCookie} className="big-cookie-img"/>
          </button>
        </div>
      </div>
      <div className="section-bottom">
        <div className="upgrades">
          <button className="upgrade">

          </button>
        </div>
      </div>
    </div>
  )
}