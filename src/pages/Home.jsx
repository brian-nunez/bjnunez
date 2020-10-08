import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from '../components/PageWrapper';

export default () => (
  <PageWrapper>
    <div>Home</div>
    <Link to="/about">
      <button>Next</button>
    </Link>
    <Link to="/path/of/unknown/route">
      <button>Some Place?</button>
    </Link>
  </PageWrapper>
);
