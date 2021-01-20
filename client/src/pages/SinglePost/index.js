import React, { useState, useEffect, useContext } from "react";
import CurrentUserPost from "../../components/CurrentUserPost";
import NonUserPost from "../../components/NonUserPost";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";

function SinglePost(props) {
  const { handleLogout } = props;
  const { _id } = useContext(UserContext);
  const [singlePost, setSinglePost] = useState({});

  // sets state with post data and is editable if post is owned by logged in user
  const handleSinglePost = () => {
    API.getSinglePost(window.location.pathname.substr(6)).then((res) => {
      if (_id === res.data.user) {
        return setSinglePost({ ...res.data, currentUser: true });
      } else {
        return setSinglePost({ ...res.data, currentUser: false });
      }
    });
  };

  useEffect(() => {
    handleSinglePost();
  }, []);

  const handleEditPost = () => {
    const title = document.getElementById("edit-title").value;
    const amount = document.getElementById("edit-amount").value;
    const description = document.getElementById("edit-description").value;
    const location = document.getElementById("edit-location").value;
    const worktype = document.getElementById("edit-worktype").value;
    API.updatePost(
      singlePost._id,
      title,
      description,
      location,
      amount,
      worktype
    ).then((res) => {
      alert("Post Updated!");
      console.log(res.config.data);
    });
  };

  const handleDeletePost = () => {
    API.deletePost(singlePost._id).then((res) => {
      alert("Post Deleted!");
      console.log(res);
    });
  };

  if (singlePost.currentUser) {
    return (
      <div>
        <Navbar handleLogout={handleLogout} />
        <CurrentUserPost
          singlePost={singlePost}
          handleEditPost={handleEditPost}
          handleDeletePost={handleDeletePost}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar handleLogout={handleLogout} />
        <NonUserPost singlePost={singlePost} />
      </div>
    );
  }
}

export default SinglePost;
