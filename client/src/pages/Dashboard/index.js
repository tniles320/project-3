import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";
import Footer from "../../components/Footer";

function Dashboard(props) {
  const { handleLogout } = props;

  const [posts, setPosts] = useState([]);
  const handlePosts = () => {
    API.getPosts().then((res) => {
      res.data.map((post) => {
        setPosts((posts) => [...posts, post]);
      });
    });
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Sidebar />
      <PostContainer posts={posts} />
      <Footer />
    </div>
  );
}

export default Dashboard;
