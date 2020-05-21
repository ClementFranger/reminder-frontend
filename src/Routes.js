import React from "react";
import { Route, Switch } from "react-router-dom";
import Reminders from "./containers/Reminders";
import AddReminders from "./containers/AddReminders";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Reminders />
      </Route>
      <Route exact path="/add">
        <AddReminders />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
