import React from "react";

const UserPostCard = ({ userPosts }) => {
  /* the try catch block is set up here so that 
i can add teh delete API call here
I will need a way to alter the URL string so that way
a unique call is made to each post that is being deleted 
and not deleting only one post or all the users posts

addtioanlly I need to chage the way I display a users 
posts so that way if "isActive" is set to false they will
not display or at least be marked down in red*/
  function deletePost(postId) {
    console.log(userPosts._id);

    try {
      const token = localStorage.getItem("stAuth");
      const fixedToken = token.replace(/^"(.*)"$/, "$1");

      fetch(
        "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts/" +
          userPosts._id,
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
        });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div id="postCards">
      <h2 className="postCardElements" id="postCardTitle">
        {userPosts.title}
      </h2>
      <hr></hr>
      <div className="postCardElements">{userPosts.description}</div>
      <div className="postCardElements" id="postCardPrice">
        <b>Price:</b> {userPosts.price}
      </div>
      <div className="postCardElements" id="postCardSeller">
        <b>Seller:</b>
      </div>
      <div className="postCardElements" id="postCardLocation">
        <b>Location:</b>
        {userPosts.location}
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
