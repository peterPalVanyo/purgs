import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/new">
          <NewPlace />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
