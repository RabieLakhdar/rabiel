import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./config/ErrorBoundary";
import Loader from "react-loader-spinner";

const Home = lazy(() => import("./pages/Home"));
const SiteMap = lazy(() => import("./pages/SiteMap"));

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary>
          <Suspense
            fallback={
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            }
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/sitem" component={SiteMap} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
};
