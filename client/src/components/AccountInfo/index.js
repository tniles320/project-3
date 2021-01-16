import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";


// input forms for creating a post
function AccountInfo(props) {
    const { username, email, zipCode, rating } = useContext(UserContext);

  return (
    <div>
    {username}
      <br/>
    {email}
      <br/>
  {zipCode}
      <br/>
  {rating}
    </div>
  )}

export default AccountInfo;