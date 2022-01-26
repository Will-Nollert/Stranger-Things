import React from "react";
import UserProfile from "./UserProfile";

const UserPostCard = ({ filteredPosts }) => {
  function deletePost() {
    try {
      const token = localStorage.getItem("stAuth");
      const fixedToken = token.replace(/^"(.*)"$/, "$1");

      fetch(
        "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts/" +
          filteredPosts._id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + fixedToken,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          UserProfile();
        });
      console.log(filteredPosts);
    } catch (error) {
      alert(error.message);
    }
  }

  /*  for (let index = 0; index < userPosts.length; index++) {
    const element = userPosts[index];
    if (!element.active) {
      console.log("HI");
    } else {
      index++;
    }
  } */

  return (
    <div id="postCards">
      <h2 className="postCardElements" id="postCardTitle">
        {filteredPosts.title}
      </h2>
      <hr></hr>
      <div className="postCardElements">{filteredPosts.description}</div>
      <div className="postCardElements" id="postCardPrice">
        <b>Price:</b> {filteredPosts.price}
      </div>
      <div className="postCardElements" id="postCardSeller">
        <b>Seller:</b> {filteredPosts.author}
      </div>
      <div className="postCardElements" id="postCardLocation">
        <b>Location:</b>
        {filteredPosts.location}
      </div>
      <button
        id="deleteBtn"
        onClick={deletePost}
        className="postCardElements"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default UserPostCard;
