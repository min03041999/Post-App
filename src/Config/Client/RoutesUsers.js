import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Animal from "../../component/News";

const RoutesClient = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={""} component={Animal} exact />
    </Switch>
  );
};

export default RoutesClient;
