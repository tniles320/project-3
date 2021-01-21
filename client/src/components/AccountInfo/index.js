import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./style.css";

// input forms for creating a post
function AccountInfo(props) {
  const { handleEditAccount } = props;
  const { username, email, zipCode, rating } = useContext(UserContext);

  return (
    <div className="account-info-container">
      <div id="username-div">
        Username:
        <input id="edit-username" defaultValue={username}></input>
      </div>
      <div id="email-div">
        Email:
        <input id="edit-email" defaultValue={email}></input>
      </div>
      <div id="zip-div">
        Zip Code:
        <input id="edit-zip" defaultValue={zipCode}></input>
      </div>
      <div id="rating-div">
        Rating:
        <p>{rating}</p>
      </div>
      <div id="edit-account-btn-div">
        <button id="edit-account-btn" onClick={handleEditAccount}>
          Edit Account
        </button>
      </div>
    </div>
  );
}

export default AccountInfo;
