import React, { Component } from 'react';
import firebase from "firebase";
import { firebaseApp } from "../../base";

class Login extends Component {
  redirectToLobby = async authData => {
    this.props.history.push("/");
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.props.authHandler ? this.props.authHandler : this.redirectToLobby);
  };

  render() {
    return (
      <nav className="login">
        <h2>Sign in to view available tools</h2>
        <button className="github" onClick={() => this.authenticate("Github")}>
          Log In With GitHub
        </button>
        <button className="facebook" onClick={() => this.authenticate("Facebook")}>
          Log In With Facebook
        </button>
      </nav>
    );
  }
}


export default Login;
