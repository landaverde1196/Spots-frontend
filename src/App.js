import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./shared/components/Navigation/NavBar";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const auth = useContext(AuthContext);
  let routes;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      auth.login(storedData.userId, storedData.token);
    }
  }, [auth]);

  if (auth.token) {
    routes = (
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/:userId/places" component={UserPlaces} exact />
        <Route path="/places/new" component={NewPlace} exact />
        <Route path="/places/:placeId" component={UpdatePlace} exact />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/:userId/places" component={UserPlaces} exact />
        <Route path="/auth" component={Auth} exact />
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <NavBar />
      <main>{routes}</main>
    </BrowserRouter>
  );
};

export default App;
