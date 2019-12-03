import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'

function App() {
  return (
    <BrowserRouter>
      <main>
        <MainNavigation />
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path='/:userId/places'>
            <UserPlaces/>
          </Route>
          <Route exact path="/places/new">
            <NewPlace />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
