import React from "react";
import "./style.css";

// input forms for creating a post
function CreatePost(props) {
  const { handlePost } = props;
  return (
    <div>
      <h2 id="create-note">Click into any form to fill out</h2>
      <div id="title-div">
        <input id="post-title" placeholder="Title"></input>
      </div>
      <div id="post-worktype">
        <label htmlFor="worktype">Work Type</label>
        <select id="worktype">
          <option value="select">Select</option>
          <option value="Delivery & Moving">Delivery & Moving</option>
          <option value="Handyman">Handyman</option>
          <option value="IT & Admin">IT & Admin</option>
        </select>
      </div>
      <div id="description-container">
        <label htmlFor="desciption-div">Description</label>
        <div id="desciption-div">
          <input id="post-description" placeholder="Post Description"></input>
        </div>
      </div>
      <div id="post-loc-amount">
        <div>
          <label htmlFor="location-div">Location</label>
          <div id="location-div">
            <input id="post-location" placeholder="City"></input>
          </div>
        </div>
        <div> 
          <label htmlFor="image-div">Upload Image</label>
          <button id="photoupload" onClick={handlePost}>
            Upload
          </button>
        </div>
        <div>
          <label htmlFor="amount-div">Amount</label>
          <div id="amount-div">
            <input id="post-amount" placeholder="$$$"></input>
          </div>
        </div>
      </div>
      <div id="submit-div">
        <button id="submit-post" onClick={handlePost}>
          Submit Post!
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
