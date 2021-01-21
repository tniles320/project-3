import React from "react";

// input forms for creating a post
function PostContainer(props) {
  return (
    <div>
      <div>
        <input id="post-title" placeholder="Title"></input>
        <input id="post-amount" placeholder="Amount $$"></input>
      </div>
      <div>
        <textarea
          id="post-description"
          placeholder="Post Description"
        ></textarea>
      </div>
      <div>
        <input id="post-location" placeholder="city"></input>
      </div>
      <div>
        <button id="submit-post" onClick={props.handlePost}>
          Submit Post!
        </button>
      </div>
    </div>
  );
}

export default PostContainer;
