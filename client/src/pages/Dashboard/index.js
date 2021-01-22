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
  const { _id } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  // gets all posts that aren't user's posts
  const handlePosts = () => {
    API.getPosts().then((res) => {
      res.data.map((post) => {
        if (_id !== post.user) {
          setPosts((posts) => [...posts, post]);
        }
      });
    });
  };

  useEffect(() => {
    handlePosts();
  }, []);

  // filters posts from user queries
  const handleFilter = (data, event) => {
    event.preventDefault();
    const wtype = document.getElementById("work-type");
    const wrtype = document.getElementById("worker-type");
    const worktype = wtype.options[wtype.selectedIndex].text;
    const workertype = wrtype.options[wrtype.selectedIndex].text;
    setPosts([]);
    posts.map((post) => {
      if (worktype === post.worktype && data === post.worktypeinquiry) {
        setPosts((posts) => [...posts, post]);
      } else if (
        workertype === post.worktype &&
        data === post.worktypeinquiry
      ) {
        setPosts((posts) => [...posts, post]);
      }
    });
  };

  // resets posts
  const handleReset = () => {
    setPosts([]);
    handlePosts();
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="dash-container">
        <Sidebar handleFilter={handleFilter} handleReset={handleReset} />
        <PostContainer posts={posts} />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
