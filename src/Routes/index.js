import React from "react";
import LandingPageLayout from "../components/Layouts/LandingPageLayout";
import RouteWithLayout from "../components/Routes/RouteWIthLayout";
import Home from "../views/Home/Home";
import { Switch, Route } from "react-router-dom";
import Incubator from "../views/Incubator/Incubator";

const Routes = () => {
  return (
    <Switch>
        <Route 
         exact
         path="/"
         component={Home}
         />
      <RouteWithLayout
        exact
        path="/incubator"
        layout={LandingPageLayout}
        component={Incubator}
      />
    </Switch>
  );
};

export default Routes;
