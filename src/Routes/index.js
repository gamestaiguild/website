import React from "react";
import LandingPageLayout from "../components/Layouts/LandingPageLayout";
import RouteWithLayout from "../components/Routes/RouteWIthLayout";
import Home from "../views/Home/Home";
import { Switch, Route } from "react-router-dom";
import Incubator from "../views/Incubator/Incubator";
import Projects from "../views/Incubator/Projects";
import PageNotFound from "../components/pageNotFound";

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
      <RouteWithLayout
        exact
        path="/project/:id"
        layout={LandingPageLayout}
        component={Projects}
      />
      <Route path={'*'} component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
