import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Battle from "./battles/Battle";
import Monster from "./sheets/Monster";
import Player from "./sheets/Player";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/battles/:battleId?" component={Battle} />
      <Route path="/players/:playerId?" component={Player} />
      <Route path="/monsters/:monsterId?" component={Monster} />
    </Switch>
  </BrowserRouter>
);

export default Router;
