import React, { useState } from "react";
import bigCookie from "./Images/cookie.png";
import "./App.css"

export default function App() {
  const [cookies, setCookies] = useState(0)
  
  const handleClick = () => {
    setCookies(cookies + 1)
  }

  return (
    <div className="game">
      <div className="section-top">
        <div className="score-cntnr">
          <span className="score">{cookies}</span>
        </div>
        <div className="cookie-container">
          <button className="big-cookie-btn" onClick={handleClick}>
            <img src={bigCookie} className="big-cookie-img"/>
          </button>
        </div>
      </div>
      <div className="section-bottom">
        <div className="upgrade-cntnr">
          <button className="upgrade">pointer</button>
          <button className="upgrade">grandma</button>
          <button className="upgrade">factory</button>
        </div>
      </div>
    </div>
  );
}