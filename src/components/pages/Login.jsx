import React from "react";
import { Link } from "wouter";
import { Form } from "../Form";
import { useAuth } from "../../providers/auth-provider";

function Login() {
  const { login } = useAuth();

  const inputs = [
    {
      name: "email",
      type: "email"
    },
    {
      name: "password",
      type: "password"
    },
  ];

  return (
    <div className="page-container">
    <p className="logo2">...</p>
        <Form className="form-control" title="Login" onSubmit={login} inputs={inputs} />
        <p>
          Don't have an account? <Link className="sign-up-here" to="/signup">Sign up here</Link>
        </p>
      </div>
  );
}

export { Login };