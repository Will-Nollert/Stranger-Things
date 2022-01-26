import React, { useState, useEffect } from "react";
import UserPostCard from "./UserPostCard";

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  //const [activeUserPosts, getActiveUserPosts] = useState([]);

  const URL =
    "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/users/me";

  async function fetchUserPosts(url) {
    const token = localStorage.getItem("stAuth");
    const fixedToken = token.replace(/^"(.*)"$/, "$1");

    const userPosts = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + fixedToken,
      },
    });
    return await userPosts.json();
  }

  useEffect(() => {
    fetchUserPosts(URL).then((res) => setUserPosts([...res.data.posts]));
  }, []);

  /* 
  so right now line 34 is logging all of the post the User has made
  and then line 41 is loggin the new array which has only the active posts  */
  let filteredPosts = [];
  function filterActivePosts() {
    for (let i = 0; i < userPosts.length; i++) {
      const element = userPosts[i];
      console.log(element);
      if (element.active === true) {
        filteredPosts.push(element);
        i++;
      }
    }
    console.log(filteredPosts);
  }

  console.log(filterActivePosts(filteredPosts));

  //console.log(userPosts[0].active);

  return (
    <div>
      {filteredPosts.map((post) => {
        console.log(post);
        return <UserPostCard filteredPosts={post} />;
      })}
    </div>
    /*     <div>
      {userPosts.map((userPosts) => {
        //console.log(userPosts);
        return <UserPostCard userPosts={userPosts} />;
      })}
    </div> */
  );
};

export default UserProfile;
