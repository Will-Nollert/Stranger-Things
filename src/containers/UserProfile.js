import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]);

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
  console.log(userPosts);

  return (
    <div>
      {userPosts.map((userPosts) => {
        console.log(userPosts);
      })}
    </div>
  );
};

export default UserProfile;
