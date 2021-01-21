import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function PostCard(props) {
  const { post } = props;
  const { username, title, worktype, location, amount, _id } = post;
  return (
    <Link to={`post/${_id}`} className="post-link">
      <div className="post-container">
        <h2>{title}</h2>
        <span>Work Type:</span>
        <p>{worktype}</p>
        <span>City:</span>
        <p>{location}</p>
        <span>$$</span>
        <p>{amount}</p>
      </div>
    </Link>
  );
}

export default PostCard;
