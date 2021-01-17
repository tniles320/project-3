import React from "react";
import "./style.css";

function CurrentUserPost(props) {
  console.log(props);
  const { handleEditPost, handleDeletePost, singlePost } = props;
  const { amount, description, location, title } = singlePost;
  return (
    <div>
      <div id="user-ttl">
        <input id="edit-title" defaultValue={title}></input>
      </div>
      <label for="user-description">Description</label>
      <div id="user-description">
        <input id="edit-description" defaultValue={description}></input>
      </div>
      <div id="user-loc-amount">
        <div>
          <label for="user-loc">Location</label>
          <div id="user-loc">
            <input id="edit-location" defaultValue={location}></input>
          </div>
        </div>
        <div>
          <label for="user-amnt">Amount</label>
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
