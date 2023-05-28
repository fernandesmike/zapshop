import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../../components/Signin/AuthOptions";

const Signin = () => {
  return (
    <div>
      <p>I am at Sign in</p>
      <Link to="/register">
        <button>Click here to register</button>
      </Link>

      <section className="flex flex-col justify-center gap-3">
        <AuthOptions authMethod="Google" />
        <AuthOptions authMethod="Facebook" />
      </section>
    </div>
  );
};

export default Signin;
