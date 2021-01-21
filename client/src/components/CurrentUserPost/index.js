import React from "react";
import "./style.css";

function CurrentUserPost(props) {
  const { handleEditPost, handleDeletePost, singlePost } = props;
  const { amount, description, location, title, worktype } = singlePost;
  return (
    <div>
      <h2 id="edit-note">Click into any form to edit</h2>
      <div id="user-ttl">
        <input id="edit-title" defaultValue={title}></input>
      </div>
      <div id="user-worktype">
        <label htmlFor="edit-worktype">Work Type</label>
        <select id="edit-worktype">
          <option value={worktype}>{worktype}</option>
          <option value="Delivery & Moving">Delivery & Moving</option>
          <option value="Handyman">Handyman</option>
          <option value="IT & Admin">IT & Admin</option>
        </select>
      </div>
      <div id="description-container">
        <label htmlFor="user-description">Description</label>
        <div id="user-description">
          <textarea
            id="edit-description"
            wrap="soft"
            defaultValue={description}
          ></textarea>
        </div>
      </div>
      <div id="user-loc-amount">
        <div>
          <label htmlFor="user-loc">Location</label>
          <div id="user-loc">
            <input id="edit-location" defaultValue={location}></input>
          </div>
        </div>
        <div>
          <label htmlFor="user-amnt">Amount</label>
          <div id="user-amnt">
            <input id="edit-amount" defaultValue={amount}></input>
          </div>
        </div>
      </div>
      <div id="edit-btns">
        <button id="edit-post" onClick={handleEditPost}>
          Submit Edit
        </button>
        <button id="delete-post" onClick={handleDeletePost}>
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default CurrentUserPost;
