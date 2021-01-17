import React, { useState, useEffect, useContext } from "react";
import CurrentUserPost from "../../components/CurrentUserPost";
import NonUserPost from "../../components/NonUserPost";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";

function SinglePost(props) {
  const { id } = useContext(UserContext);
  const [singlePost, setSinglePost] = useState({});

  // state shows as empty on page load
  const handleSinglePost = () => {
    API.getSinglePost(window.location.pathname.substr(6)).then((res) => {
      if (id === res.data.user) {
        return setSinglePost({
          id: res.data._id,
          user: res.data.user,
          username: res.data.username,
          title: res.data.title,
          description: res.data.description,
          amount: res.data.amount,
          location: res.data.location,
          currentUser: true,
        });
      } else {
        return setSinglePost({
          id: res.data._id,
          user: res.data.user,
          username: res.data.username,
          title: res.data.title,
          description: res.data.description,
          amount: res.data.amount,
          location: res.data.location,
          currentUser: false,
        });
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
    API.updatePost(singlePost.id, title, description, location, amount).then(
      (res) => {
        alert("Post Updated!");
        console.log(res.config.data);
      }
    );
  };

  const handleDeletePost = () => {
    API.deletePost(singlePost.id).then((res) => {
      alert("Post Deleted!");
      console.log(res);
    });
  };

  if (singlePost.currentUser) {
    return (
      <div>
        <Navbar handleLogout={props.handleLogout} />
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
        <Navbar handleLogout={props.handleLogout} />
        <NonUserPost singlePost={singlePost} />
      </div>
    );
  }
}

export default SinglePost;
