import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const SiteMap = lazy(() => import("./pages/SiteMap"));

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/sitem" component={SiteMap} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};
