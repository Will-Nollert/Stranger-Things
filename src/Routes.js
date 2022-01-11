import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route exact path ="/Login">
            <Login />
        </Route>
        <Route exact path="/Signup">
        <SignUp />
        </Route>
        <NotFound />
    </Switch>
  );
}