import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

export default () => {
  const [seconds, setSeconds] = useState(7);
  const handleTime = () => setSeconds(seconds - 1);

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(interval);
      return;
    }
    const interval = setInterval(handleTime, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  if (seconds <= 0) return <Redirect to="/" />;
  return <div>Redirecting in {seconds} seconds</div>;
};
