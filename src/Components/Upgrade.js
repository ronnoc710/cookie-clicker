import React from "react";

export default function Upgrade(props) {

  return(
    <button
      className="upgrade"
    >
      <span className="upgrade-name"> {props.id} </span>
      <span className="cookies-per-sec"> {props.baseCPS} cookies/second </span>
      <span className="upgrade-cost"> 
        {props.baseCost/1000000 > 1 ? props.baseCost/1000000 : props.baseCost} 
        {props.baseCost/1000000 > 1 ? " mil" : "" }
      </span>
    </button>
  )
}