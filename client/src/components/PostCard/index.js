import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  const { post } = props;
  const { username, title, worktype, location, amount, _id } = post;
  return (
    <div>
      <Link to={`post/${_id}`}>
        <h3>{title}</h3>
        <p>{username}</p>
        <p>{worktype}</p>
        <p>{location}</p>
        <p>{amount}</p>
      </Link>
    </div>
  );
}

export default PostCard;
