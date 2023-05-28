import React from "react";

const AuthOptions = ({ authMethod }) => {
  return (
    <button className="py-3 px-5 bg-red-500 max-w-sm rounded-full">
      Continue using {authMethod}
    </button>
  );
};

export default AuthOptions;

// TODO:
// Allow Google and Facebook
