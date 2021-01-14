import React from "react";

// loops through posts and creates individual post cards
function PostDisplay(props) {
  const { userPosts } = props;
  return (
    <div>
      {userPosts.map((post) => {
        return (
          <div>
            <div>{post.title}</div>
            <div>{post.location}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostDisplay;
