import React from "react";
import PostCard from "../PostCard";
import "./style.css";

function PostContainer(props) {
  const { posts } = props;
  return (
    <div>
      <h2>Recent Posts</h2>
      <div id="dash-post-container">
        {posts.map((post, index) => {
          return (
            <div key={index} className="post-card">
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostContainer;
