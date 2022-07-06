import React from "react";
import Upgrade from "./Upgrade"

export default function Upgrades(props) {
  const upgrades = props.upgradeList

  const shop = upgrades
  .map(upgrade => (
    <Upgrade
      id={upgrade.id}
      baseCost={ upgrade.baseCost }
      baseCPS={upgrade.baseCPS}
    />
  ));

  return(
    <div className="upgrade-cntnr">
      {shop}
    </div>
  )
}