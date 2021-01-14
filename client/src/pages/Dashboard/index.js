import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";

function Dashboard(props) {
  const { username, email, zipCode, rating } = useContext(UserContext);

  const [posts, setPosts] = useState([]);
  const handlePosts = () => {
    API.getPosts().then((res) => {
      res.data.map((post) => {
        let postObj = {
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
    handlePosts();
  }, []);

  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
      <PostContainer posts={posts} />
    </div>
  );
}

export default Dashboard;
