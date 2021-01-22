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
      <div id="upload-image">
        <label htmlFor="image"> Upload Image</label>
        <button id="upload-image" onClick={handlePost}>
          Image
        </button>
      </div>
      <div id="description-container">
        <label htmlFor="description-div">Description</label>
        <div id="description-div">
          <textarea
            id="post-description"
            wrap="soft"
            placeholder="Post Description"
          ></textarea>
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
          <label htmlFor="contact-div">Contact Info</label>
          <div id="contact-div">
            <input id="post-contact" placeholder="Email or Phone Number"></input>
          </div>
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
