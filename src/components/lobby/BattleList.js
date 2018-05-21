import React from "react";
import { Link } from "react-router-dom";

const BattleList = props => (
  <div className="battle-list">
    {props.battles.length ? (
    <ul className="battles">
      {
        props.battles.map(battle => (
          <li key={battle.battleId}>
            <Link to={`/battles/${battle.Id}`}>{battle.name}</Link>
          </li>
        ))
      }
    </ul>
    ) : (
    <span className="no-battles-message">No battles available in the store.</span>
    )}
    <Link to="/battles/">Create a Battle</Link>
  </div>
);

export default BattleList;
