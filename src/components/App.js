import React, { Component } from 'react';
import './App.css';

// import base from "../base";

import BattlePicker from './lobby/BattlePicker';
import SheetPicker from './lobby/SheetPicker';
import Login from './lobby/Login';

class App extends Component {
  state = {
    uid: true
  };

  componentDidMount() {
    // this.ref = base.syncState(`${params.lobbyId}`, {context: this, state: 'battles'});
  }

  componentWillUnmount() {
    // base.removeBinding(this.ref);
  }

  authHandler = () => {

  }

  authenticate = provider => {

  }

  render() {
    // Check if user is logged in
    if (this.state.uid) {
      return (
        <div className="lobby">
          <BattlePicker />
          <SheetPicker />
        </div>
      );
    }

    return (
      <div className="lobby">
        <Login authenticate={this.authenticate} />
      </div>
    );
  }
}

export default App;
