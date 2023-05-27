import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <p>I am at Register</p>
      <Link to="/">
        <button>Click here to signin</button>
      </Link>
    </div>
  );
};

export default Signup;
