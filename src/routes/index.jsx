import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Transition from './Transition';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function Routes({ location }) {
  return (
    <div>
      <Navigation />
      {/* <Transition>
        <section className="route-section"> */}
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={About} />
            <Route path="/contact" component={About} />
            <Route component={NotFound} />
          </Switch>
        {/* </section>
      </Transition> */}
      <Footer />
    </div>
  );
}

export default withRouter(Routes);
