import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";

function Dashboard(props) {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);
  return (
    <div>
      <Navbar logout={props.logout} />
      {username} {email} {zipCode} {rating} {posts}
    </div>
  );
}

export default Dashboard;
