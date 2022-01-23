import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../lib/contextLib";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const myToken = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.onload();
    event.preventDefault();

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: email,
              password: password,
            },
          }),
        }
      );
      const { data } = await response.json();
      localStorage.setItem("stAuth", JSON.stringify(data.token));
      alert("Logged in");
      userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
