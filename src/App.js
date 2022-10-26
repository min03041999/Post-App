import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./Page/Admin/AdminPage";
import NotFound from "./Page/NotFound";
import Client from "./Page/Client";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
      <Route path="/" component={Client} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
