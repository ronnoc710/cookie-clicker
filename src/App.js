import React, { useState, useEffect } from "react";
import Upgrades from "./Components/Upgrade-cntnr"
import bigCookie from "./Images/cookie.png";
import "./App.css"

const SHOP = [
  { id: "Cursor", baseCost: 15, baseCPS: 0.1},
  { id: "Grandma", baseCost: 100, baseCPS: 1},
  { id: "Farm", baseCost: 1100, baseCPS: 8},
  { id: "Mine", baseCost: 12000, baseCPS: 47}, 
  { id: "Factory", baseCost: 130000, baseCPS: 260},
  { id: "Bank", baseCost: 1400000, baseCPS: 1400},
  { id: "Temple", baseCost: 20000000, baseCPS: 7800},
  { id: "Wizard Tower", baseCost: 330000000, baseCPS: 44000}
]

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
        <Upgrades upgradeList={SHOP} />
      </div>
    </div>
  );
}