import React from "react";

function PostCard(props) {
  const { post } = props;
  const { username, title, location, amount } = post;
  return (
    <div>
      <h3>{title}</h3>
      <p>{username}</p>
      <p>{location}</p>
      <p>{amount}</p>
    </div>
  );
}

export default PostCard;
