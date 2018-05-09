import React from "react";

const BattleList = props => (
  <div className="battle-list">
    {props.battles.length ? (
    <ul className="battles">
      {
        props.battles.map(battle => {
          return (
            <li key={battle.battleId} onClick={props.battleRouter}>{battle.name}</li>
          );
        })
      }
    </ul>
    ) : (
    <span className="no-battles-message">No battles available in the store.</span>
    )}
  </div>
);

export default BattleList;
