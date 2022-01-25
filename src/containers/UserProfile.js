import React from "react";

const UserProfile = async () => {
  try {
    const token = localStorage.getItem("stAuth");
    const fixedToken = token.replace(/^"(.*)"$/, "$1");
    console.log("Bearer " + fixedToken);

    const response = await fetch();
  } catch (e) {
    alert(e.message);
  }

  return <div>hello wold</div>;
};

export default UserProfile;
