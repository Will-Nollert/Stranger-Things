// This file is a lifted copy of the signUp/Login page
//I just wanted content to make sure my Route was hitting
//will format post request and form body next
// as the currently are set for registering a new user

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function SignUp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  //const token = localStorage.getItem("stAuth");

  function validateForm() {
    return description.length > 0 && title.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //const token = localStorage.getItem("stAuth");
    //console.log(token); //this is hit

    try {
      const token = localStorage.getItem("stAuth");
      console.log(token); //this is hit

      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            post: {
              title: title,
              description: description,
              price: price,
              //willDeliver: true,
            },
          }),
        }
      );
      const data = await response.json();
      const readableResponse = JSON.stringify(data.error);
      console.log(readableResponse.post);

      if (readableResponse.post) {
        alert("Post Sent");
      } else {
        alert("Error sending post");
      }
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            autoFocus
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>Post description</Form.Label>
          <Form.Control
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>Post price</Form.Label>
          <Form.Control
            type="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Submite New Post!
        </Button>
      </Form>
    </div>
  );
}
