import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./style.css";

function Account() {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);

  return (
    <div>
      <div className="account-container">
      <h2 className ="Header"> Welcome Back {username} {rating}</h2>
      <br/>
      <div className="account-info">
      <h3>Account Info</h3>
      {username}
        {email} {zipCode}
        
    </div>
     
    </div>
    </div>
  );
}

export default Account;