import React from "react";
import UserContext from "../../utils/UserContext";

function Account() {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);

  return <div></div>;
}

export default Account;
