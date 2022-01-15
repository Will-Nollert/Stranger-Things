import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT/users/register`,
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
      localStorage.setItem(`stAuth`, JSON.stringify(data.token));
      console.log(data.token);
      alert("Sign-Up compleate, Please Login");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="SignUp">
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
          Submite New Post!
        </Button>
      </Form>
    </div>
  );
}
