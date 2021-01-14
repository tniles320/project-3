import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./style.css";
import Navbar from "../../components/Navbar";

function Dashboard(props) {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);
  return (
    <div>
<Navbar logout={props.logout} />
      <div className="account-container">
      <h2 className ="Header"> Welcome Back {username} {rating}</h2>
      <br/>
      <div className="account-info">
      <h3>Account Info</h3>
      {username}
        {email} {zipCode}
        
    </div>
    {posts}
    </div>
    </div>
  );
}

export default Dashboard;
