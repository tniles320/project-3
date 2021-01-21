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

  const handleFilter = (event) => {
    event.preventDefault();
    const wtype = document.getElementById("work-type");
    const wrtype = document.getElementById("worker-type");
    const worktype = wtype.options[wtype.selectedIndex].text;
    const workertype = wrtype.options[wrtype.selectedIndex].text;
    setPosts([]);
    posts.map((post) => {
      if (worktype === post.worktype) {
        setPosts((posts) => [...posts, post]);
      }
    });
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="dash-container">
        <Sidebar handleFilter={handleFilter} />
        <PostContainer posts={posts} />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
