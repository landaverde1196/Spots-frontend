import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/places/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
