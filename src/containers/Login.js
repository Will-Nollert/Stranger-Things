import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../lib/contextLib";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();

  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return text.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    //event.onload();
    event.preventDefault();

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: text,
              password: password,
            },
          }),
        }
      );
      const { data } = await response.json();
      const jotToken = JSON.stringify(data.token);
      localStorage.setItem(`stAuth`, jotToken);
      alert("Logged in");
      userHasAuthenticated(true);
      //console.log(localStorage);
      //console.log(jotToken);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
