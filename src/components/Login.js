import React, { Component } from 'react';

const Login = props => (
  <nav className="login">
    <h2>Sign in to view available tools</h2>


    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In With Facebook
    </button>
  </nav>
);


export default Login;
