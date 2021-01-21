import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import "./style.css";

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
    <div className="dash-container">
      <Navbar handleLogout={handleLogout} />
      <Sidebar />
      <h2>Recent Posts</h2>
      <PostContainer posts={posts} />
      <Footer />
    </div>
  );
}

export default Dashboard;
