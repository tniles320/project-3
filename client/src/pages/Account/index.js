import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import PostDisplay from "../../components/PostDisplay";

function Account() {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);

  const [userPosts, setUserPosts] = useState([]);

  // uses axios call to push user posts to state
  const handleUserPosts = () => {
    API.findUserPosts().then((res) => {
      res.data.map((post) => {
        let postObj = {
          user: post.user,
          username: post.user,
          title: post.title,
          description: post.description,
          amount: post.amount,
          location: post.location,
        };
        setUserPosts((userPosts) => [...userPosts, postObj]);
      });
    });
  };

  useEffect(() => {
    handleUserPosts();
  }, []);

  return (
    <div>
      {username}
      {email}
      {zipCode}
      {rating}
      <PostDisplay userPosts={userPosts} />
    </div>
  );
}

export default Account;
