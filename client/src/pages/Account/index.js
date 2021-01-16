import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer";
import Navbar from "../../components/Navbar";
import AccountInfo from "../../components/AccountInfo";
import "./style.css";

function Account(props) {
  const { username, email, zipCode, rating } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  // uses axios call to push user posts to state
  const handleUserPosts = () => {
    API.findUserPosts().then((res) => {
      res.data.map((post) => {
        let postObj = {
          id: post._id,
          user: post.user,
          username: post.username,
          title: post.title,
          description: post.description,
          amount: post.amount,
          location: post.location,
        };
        setPosts((posts) => [...posts, postObj]);
      });
    });
  };

  useEffect(() => {
    handleUserPosts();
  }, []);

  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
      <div className="account-info-div">
        <AccountInfo />
        <PostContainer posts={posts} />
      </div>
    </div>
  );
}

export default Account;
