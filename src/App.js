import "bootstrap/dist/css/bootstrap.css";

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AdminPage from "./Page/Admin/AdminPage";
import Client from "./Page/Client";

import "./App.css";

// import openSocket from "socket.io-client";

function App() {
  // useEffect(() => {
  //   openSocket("http://localhost:8080");
  // }, []);
  return (
    <Switch>
      <Route path="/admin" component={AdminPage} />
      <Route path="/" component={Client} />
    </Switch>
  );
}

export default App;
