import React from 'react';
import { Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Transition({
  children,
  location,
}) {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(Transition);
