import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./Page/Admin/AdminPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
    </Switch>
  );
}

export default App;
