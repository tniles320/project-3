import React from "react";
import "./style.css";

function NonUserPost(props) {
  console.log(props);
  const { singlePost } = props;
  const { amount, description, location, title } = singlePost;
  return (
    <div>
      <h1 id="post-ttl">{title}</h1>
      <label for="post-description">Description</label>
      <div id="post-description">
        <p>{description}</p>
      </div>
      <div id="post-loc-amount">
        <div>
          <label for="post-loc">Location</label>
          <div id="post-loc">
            <p>{location}</p>
          </div>
        </div>
        <div>
          <label for="post-amnt">Amount</label>
          <div id="post-amnt">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonUserPost;
