import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BattleList from './lobby/BattleList';
import CurrentUser from './lobby/CurrentUser';
import firebase from "firebase";
import base from "../base";

class App extends Component {
  state = {
    uid: null,
    battles: [],
    sheets: []
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });

    this.ref = base.syncState("battles", {
      context: this,
      state: "battles"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  authHandler() {
    const authUser = firebase.auth().currentUser;

    // set user into state
    if (authUser) {
      this.setState({
        uid: authUser.uid
      });
    }
  }

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

    // can potentially host other tools
    return (
      <main className="lobby">
        <BattleList battles={this.state.battles} />
        <StyledPicker className={"sheet-picker"}>
          <Link to="/players/">Create a player sheet </Link>
          <Link to="/monsters/">Create a monster sheet</Link>
        </StyledPicker>
        <CurrentUser uid={this.state.uid} />
      </main>
    );
  }
}

export default App;
