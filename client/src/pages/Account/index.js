import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import PostContainer from "../../components/PostContainer";
<<<<<<< HEAD

function Account() {
=======
import Navbar from "../../components/Navbar";

function Account(props) {
>>>>>>> 22338f39200e8900456d2313146958ea3188473c
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
      {username}
      {email}
      {zipCode}
      {rating}
<<<<<<< HEAD
=======
      <Navbar handleLogout={props.handleLogout} />
>>>>>>> 22338f39200e8900456d2313146958ea3188473c
      <PostContainer posts={posts} />
    </div>
  );
}

export default Account;
