import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <p>I am at Sign in</p>
      <Link to="/register">
        <button>Click here to register</button>
      </Link>
    </div>
  );
};

export default Signin;
