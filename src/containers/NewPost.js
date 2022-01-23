// This file is a lifted copy of the signUp/Login page
//I just wanted content to make sure my Route was hitting
//will format post request and form body next
// as the currently are set for registering a new user

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("stAuth");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT/users/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            poat: {
              title: "My favorite stuffed animal",
              description:
                "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
              price: "$480.00",
              willDeliver: true,
            },
          }),
        }
      );
      const { post } = await response.json();
      console.log(post.title);
      alert("Post Sent");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Post Content</Form.Label>
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
