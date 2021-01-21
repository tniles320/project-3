import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer";
import Navbar from "../../components/Navbar";
import AccountInfo from "../../components/AccountInfo";
import "./style.css";

function Account(props) {
  const { handleLogout } = props;
  const { _id } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  // uses axios call to push user posts to state
  const handleUserPosts = () => {
    API.findUserPosts().then((res) => {
      res.data.map((post) => {
        setPosts((posts) => [...posts, post]);
      });
    });
  };

  useEffect(() => {
    handleUserPosts();
  }, []);

  const handleEditAccount = () => {
    const editUsername = document.getElementById("edit-username").value;
    const editEmail = document.getElementById("edit-email").value;
    const editZip = document.getElementById("edit-zip").value;

    API.editUser(_id, editUsername, editEmail, editZip).then(() => {
      alert("Account Updated!");
    });
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div id="account-container">
        <AccountInfo handleEditAccount={handleEditAccount} />
        <PostContainer posts={posts} />
      </div>
    </div>
  );
}

export default Account;
