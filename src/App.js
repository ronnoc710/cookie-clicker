import React, { useState, useEffect } from "react";
import Upgrades from "./Components/Upgrade-cntnr"
import bigCookie from "./Images/cookie.png";
import "./App.css"

export default function App() {
  const [cookies, setCookies] = useState(() => {
    const saved = localStorage.getItem("cookies");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  
  useEffect(() => {
    localStorage.setItem("cookies", cookies);
  }, [cookies]);

  const handleClick = () => {
    setCookies(cookies + 1)
  }

  return (
    <div className="game">
      <div className="section-top">
        <div className="score-cntnr">
          <span className="score">{cookies} {cookies === 1 ? "cookie": "cookies"}</span>
        </div>
        <div className="cookie-container">
          <button className="big-cookie-btn" onClick={handleClick}>
            <img src={bigCookie} className="big-cookie-img"/>
          </button>
        </div>
      </div>
      <div className="section-bottom">
        <Upgrades/>
      </div>
    </div>
  );
}