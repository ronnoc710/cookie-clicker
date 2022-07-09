import React, { useState, useEffect } from "react";
import Upgrade from "./Components/Upgrade";
import bigCookie from "./Images/cookie.png";
import "./App.css"

const upgrades = [
  { index: 0, id: "Cursor", baseCost: 15, baseCPS: 0.1, owned: 0 },
  { index: 1, id: "Grandma", baseCost: 100, baseCPS: 1, owned: 0 },
  { index: 2, id: "Farm", baseCost: 1100, baseCPS: 8, owned: 0 },
  { index: 3, id: "Mine", baseCost: 12000, baseCPS: 47, owned: 0 }, 
  { index: 4, id: "Factory", baseCost: 130000, baseCPS: 260, owned: 0 },
  { index: 5, id: "Bank", baseCost: 1400000, baseCPS: 1400, owned: 0 },
  { index: 6, id: "Temple", baseCost: 20000000, baseCPS: 7800, owned: 0 },
  { index: 7, id: "Wizard Tower", baseCost: 330000000, baseCPS: 44000, owned: 0 }
]

export default function App() {
  const [ owned, setOwned ] = useState(Array(8).fill(0))

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

  const shop = upgrades
  .map(upgrade => (
    <Upgrade
      index={upgrade.index}
      id={upgrade.id}
      baseCost={ upgrade.baseCost }
      baseCPS={upgrade.baseCPS}
      owned={upgrade.owned}
    />
  ));

  return (
    <div className="game">
      <div className="section-top">
        <div className="score-cntnr">
          <span className="score">{cookies} {cookies === 1 ? "cookie": "cookies"}</span>
        </div>
        <div className="cookie-container">
          <button className="big-cookie-btn" onClick={handleClick}>
            <img src={bigCookie} alt="big cookie" className="big-cookie-img"/>
          </button>
        </div>
      </div>
      <div className="section-bottom">
        <div className="upgrade-cntnr">
          {shop}
        </div>
      </div>
    </div>
  );
}