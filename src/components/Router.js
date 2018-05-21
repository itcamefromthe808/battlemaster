import React from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
// endpoints
import Battle from "./battles/Battle";
import BattleAdmin from "./battles/BattleAdmin";
import Monster from "./sheets/Monster";
import Player from "./sheets/Player";
import Lobby from "./App";
import Login from "./lobby/Login";
import NotFound from "./NotFound";

// import helpers from "../helpers";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    firebase.auth().currentUser
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
  )} />
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Lobby} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/battles/:battleId?" component={Battle} />
      <PrivateRoute path="/battles/:battleId?/admin" component={BattleAdmin} />
      <PrivateRoute path="/players/:playerId?" component={Player} />
      <PrivateRoute path="/monsters/:monsterId?" component={Monster} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
