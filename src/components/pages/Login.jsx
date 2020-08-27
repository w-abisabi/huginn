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
      <Form className="form-control" title="Login" onSubmit={login} inputs={inputs} />
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}

export { Login };