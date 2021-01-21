import React from "react";
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";

function Post() {
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
      <PostContainer handlePost={handlePost} />
    </div>
  );
}

export default Post;
