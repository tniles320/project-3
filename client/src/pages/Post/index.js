import React from "react";
import CreatePost from "../../components/CreatePost";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";

function Post(props) {
  // uses input from postContainer component to create post
  const handlePost = () => {
    const title = document.getElementById("post-title").value;
    const amount = document.getElementById("post-amount").value;
    const description = document.getElementById("post-description").value;
    const location = document.getElementById("post-location").value;
    // axios call
    API.submitPost(title, amount, description, location).then((res) => {
      window.location.replace("/dashboard");
      alert("Post Created!");
    });
  };
  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
      <CreatePost handlePost={handlePost} />
    </div>
  );
}

export default Post;
