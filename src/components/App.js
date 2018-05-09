import React, { Component } from 'react';
import styled from 'styled-components';

// import base from "../base";
// import helpers from "../helpers";
import Login from './Login';
import BattleList from './BattleList';
import SheetList from './SheetList';

class App extends Component {
  // basically, user data
  state = {
    uid: true,
    editor: true,
    battles: [],
    sheets: []
  };

  battleRouter = e => this.props.history.push(`/battles/${e.currentTarget.value || ''}`);

  playerRouter = e => this.props.history.push(`/players/${e.currentTarget.value || ''}`);

  monsterRouter = e => this.props.history.push(`/monsters/${e.currentTarget.value || ''}`);

  render() {
    const Picker = ({ className, children }) => (
      <section className={className}>
        {children}
      </section>
    );

    const StyledPicker = styled(Picker)`
      padding:2em;
      color:darkblue;
    `;

    if (!this.state.uid) {
      return (
        <div className="lobby">
          <Login />
        </div>
      );
    }

    return (
      <main className="lobby">
        <StyledPicker className={"battle-picker"}>
          <BattleList uid={this.state.uid} battles={this.state.battles} battleRouter={this.battleRouter} />
          {this.state.editor ? (
            <button className="create-battle" onClick={this.battleRouter}>Create a battle</button>
          ) : ''}
        </StyledPicker>
        <StyledPicker className={"sheet-picker"}>
          <SheetList sheets={this.state.sheets} monsterRouter={this.monsterRouter} playerRouter={this.playerRouter} />
          <button className="create-sheet" onClick={this.playerRouter}>Create a player sheet</button>
          {this.state.editor ? (
            <button className="create-sheet" onClick={this.monsterRouter}>Create a monster sheet</button>
          ) : ''}
        </StyledPicker>
      </main>
    );
  }
}

export default App;
