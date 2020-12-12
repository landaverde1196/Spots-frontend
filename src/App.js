import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./shared/components/Navigation/NavBar";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContextProvider } from "./shared/context/auth-context";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/:userId/places" component={UserPlaces} exact />
            <Route path="/places/new" component={NewPlace} exact />
            <Route path="/places/:placeId" component={UpdatePlace} exact />
            <Route path="/auth" component={Auth} exact />
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
