import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Animal from "../../component/News";
import Customer from "../../component/Customer";
import Contact from "../../component/Contact";
import NotFound from "../../component/NotFound";

const RoutesClient = () => {
  // const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={"/"} component={Animal} exact />
      <Route path={"/customer"} component={Customer} />
      <Route path={"/contact"} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RoutesClient;
