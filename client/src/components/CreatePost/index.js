import React from "react";
import "./style.css";

// input forms for creating a post
function CreatePost(props) {
  const { handlePost, handleUpload, handleFilechange } = props;
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
        <form id="upload-form" onSubmit={handleUpload}>
          <input
            id="file"
            type="file"
            name="myImage"
            accept="image/*"
            onChange={handleFilechange}
          />
          <input type="submit" value="Upload Photo" />
        </form>
      </div>

      <div id="post-worktype-inquiry">
        <label htmlFor="worktypeinquiry">Find Work OR Find a Worker</label>
        <select id="worktypeinquiry">
          <option value="select">Select</option>
          <option value="Find Work">Find Work</option>
          <option value="Find Worker">Find Worker</option>
        </select>
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
            <input
              id="post-contact"
              placeholder="Email or Phone Number"
            ></input>
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
