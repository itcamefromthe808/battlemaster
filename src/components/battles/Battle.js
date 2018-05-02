import React, { Component } from 'react';
// import BattleControls from './BattleControls';
// import Entity from './Entity';

// in order to support separate DM and player views,
// separate out controls into a "controls" component
// require login for "controls"

class Battle extends Component {
  state = {
    uid: null,
    entities: [],
    initiative: 0,
    round: 0,
    active: -1
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  addEntity = entity => {
    console.log('adding entity');
  }

  removeEntity = entity => {
    console.log('removing entity');
  }

  setActiveEntity = entity => {

  }

  updateEntity = entity => {

  }

  rollInitiative = () => {

  }

  nextEntity = () => {

  }

  previousEntity = () => {

  };

  startCombat = () => {

  };

  render() {
    return (
      <div className="battle-container">
        <BattleAdmin />
        <EntityList />
      </div>
    );
  }
}

export default Battle;