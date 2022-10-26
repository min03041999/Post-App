import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./Page/Admin/AdminPage";
import NotFound from "./Page/NotFound";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
