import React from "react";
import "./style.css";

function NonUserPost(props) {
  const { singlePost } = props;
  const { amount, description, location, title, worktype, worktypeinquiry } = singlePost;
  return (
    <div>
      <h1 id="post-ttl">{title}</h1>
      <div id="post-worktype">
        <label htmlFor="worktype-text">Work Type</label>
        <p id="worktype-text">{worktype}</p>
      </div>
      
      <div id="post-worktype-inquiry">
        <label htmlFor="worktypeinquiry">Find Work or Find a Worker</label>
        <p id="worktypeinquiry">{worktypeinquiry}</p>
      </div>
      <div id="description-container">
        <label htmlFor="post-description">Description</label>
        <div id="post-description">
          <p>{description}</p>
        </div>
      </div>
      <div id="post-loc-amount">
        <div>
          <label htmlFor="post-loc">Location</label>
          <div id="post-loc">
            <p>{location}</p>
          </div>
        </div>
        <div>
          <label htmlFor="post-amnt">Amount</label>
          <div id="post-amnt">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonUserPost;
