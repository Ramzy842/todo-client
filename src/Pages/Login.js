import React from "react";
import Form from "../Components/Login/Form";

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="border-r-4 pt-80">
        <h1 className="-rotate-90  text-3xl font-bold">Login</h1>
      </div>
      <Form />
    </div>
  );
};

export default Login;
