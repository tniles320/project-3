import React from "react";

// input forms for creating a post
function CreatePost(props) {
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
      <label>Work Type</label>
            <select id="work-type">
              <option value="select">Select</option>
              <option value="Delivery & Moving">Delivery & Moving</option>
              <option value="Handyman">Handyman</option>
              <option value="IT & Admin">IT & Admin</option>
            </select>
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

export default CreatePost;
