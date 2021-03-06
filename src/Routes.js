import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NewPost from "./containers/NewPost";
import UserProfile from "./containers/UserProfile";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Signup">
        <SignUp />
      </Route>
      <Route exact path="/NewPost">
        <NewPost />
      </Route>
      <Route exact path="/UserProfile">
        <UserProfile />
      </Route>
      <NotFound />
    </Switch>
  );
}
