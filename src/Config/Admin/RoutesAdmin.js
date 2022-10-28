import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PostList from "../../component/Post/PostList";
import UsersList from "../../component/Users/UsersList";
import NotFound from "../../component/NotFound";

const RoutesAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={PostList} exact />
      <Route path={`${path}/users`} component={UsersList} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RoutesAdmin;
