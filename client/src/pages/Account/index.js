import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

function Account() {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);

  return (
    <div>
      {username}
      <h1>Hello</h1>
    </div>
  );
}

export default Account;
