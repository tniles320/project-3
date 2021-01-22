import React from "react";
import CreatePost from "../../components/CreatePost";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";


function Post(props) {
  const { handleLogout } = props;
  // uses input from postContainer component to create post
  const handlePost = () => {
    const title = document.getElementById("post-title").value;
    const amount = document.getElementById("post-amount").value;
    const description = document.getElementById("post-description").value;
    const location = document.getElementById("post-location").value;
    const contact = document.getElementById("post-contact").value;
    const wtype = document.getElementById("worktype");
    const worktype = wtype.options[wtype.selectedIndex].text;
    const itype = document.getElementById("worktypeinquiry");
    const worktypeinquiry = itype.options[itype.selectedIndex].text;

    // axios call
    API.submitPost(title, amount, description, location, worktype, worktypeinquiry).then(() => {
      window.location.replace("/dashboard");
      alert("Post Created!");
    });
  };
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <CreatePost handlePost={handlePost} />
    </div>
  );
}

export default Post;
