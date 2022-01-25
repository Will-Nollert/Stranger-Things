import React from "react";

const UserPostCard = ({ userPosts }) => {
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
    </div>
  );
};

export default UserPostCard;
