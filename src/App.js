import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import NavBar from "./shared/components/Navigation/NavBar";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
