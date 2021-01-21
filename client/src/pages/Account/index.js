import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer";
import Navbar from "../../components/Navbar";
import AccountInfo from "../../components/AccountInfo";
import "./style.css";

function Account(props) {
  const { handleLogout } = props;

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

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="account-info-div">Your Acount Information</div>
        <AccountInfo />
       <h2> Your Posts </h2>
        <PostContainer posts={posts} />
      
    </div>
  );
}

export default Account;
