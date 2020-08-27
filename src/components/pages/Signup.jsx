import React from "react";
import { Link } from "wouter";
import { Form } from "../Form";
import { useAuth } from "../../providers/auth-provider";

function Signup() {
  const { signup } = useAuth();

  const inputs = [
    {
      name: "email",
      type: "email"
    },
    {
      name: "password",
      type: "password"
    }
  ];

  return (
    <div className="page-container">
        <p className="logo2">...</p>
        <Form title="Signup" onSubmit={signup} inputs={inputs} />
        <p>
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
  );
}

export { Signup };