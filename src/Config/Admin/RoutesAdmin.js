import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PostList from "../../component/Post/PostList";
import UsersList from "../../component/Users/UsersList";

const RoutesAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={PostList} exact />
      <Route path={`${path}/users`} component={UsersList} />
    </Switch>
  );
};

export default RoutesAdmin;
