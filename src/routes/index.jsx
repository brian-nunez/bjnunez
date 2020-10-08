import React from "react";
import { Route, Redirect } from "react-router-dom";
import Transition from './Transition';
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function Routes() {
  return (
    <Transition>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Transition>
  );
}

export default Routes;
