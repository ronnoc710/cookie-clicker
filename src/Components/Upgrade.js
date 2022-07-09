import React, { useState } from "react";

export default function Upgrade(props) {
  const [ owned, setOwned ] = useState(props.owned)

  const handlePurchase = () => {
    setOwned((prev) => prev += 1)
  }

  return(
    <button
      className="upgrade"
      onClick={handlePurchase}
    >
      <span className="upgrade-name"> {props.id} </span>
      <span className="cookies-per-sec"> {props.baseCPS} cookies/second </span>
      <span className="owned">{owned === 0 ? "": "x" + owned}</span>
      <span className="upgrade-cost"> 
        {props.baseCost/1000000 > 1 ? props.baseCost/1000000 : props.baseCost} 
        {props.baseCost/1000000 > 1 ? " mil" : "" }
      </span>
    </button>
  )
}