import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

function Dashboard() {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);
  return (
    <div>
      {username} {email} {zipCode} {rating} {posts}
    </div>
  );
}

export default Dashboard;
