import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <React.Fragment>
    <div>About</div>
    <Link to="/">
      <button>Back</button>
    </Link>
  </React.Fragment>
);
