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
  const [upload, setUpload] = useState();

  // sets state with post data and is editable if post is owned by logged in user
  const handleSinglePost = async () => {
    await API.getSinglePost(window.location.pathname.substr(6)).then((res) => {
      if (_id === res.data.user) {
        return setSinglePost({ ...res.data, currentUser: true });
      } else {
        return setSinglePost({ ...res.data, currentUser: false });
      }
    });
  };

  // retrieves image using image name from first api call *** using url in this case, using res.data may be possible
  const handleGetImage = async () => {
    await API.getSinglePost(window.location.pathname.substr(6)).then((res) => {
      const uploadImage = res.data.upload;
      API.getImage(uploadImage).then((res) => {
        setUpload(res.config.url);
      });
    });
  };

  useEffect(() => {
    handleSinglePost();
    handleGetImage();
  }, []);

  const handleEditPost = () => {
    const title = document.getElementById("edit-title").value;
    const amount = document.getElementById("edit-amount").value;
    const description = document.getElementById("edit-description").value;
    const location = document.getElementById("edit-location").value;
    const worktype = document.getElementById("edit-worktype").value;
    const contact = document.getElementById("edit-contact").value;
    API.updatePost(
      singlePost._id,
      title,
      description,
      location,
      amount,
      worktype,
      contact
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
          upload={upload}
          handleEditPost={handleEditPost}
          handleDeletePost={handleDeletePost}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar handleLogout={handleLogout} />
        <NonUserPost singlePost={singlePost} upload={upload} />
      </div>
    );
  }
}

export default SinglePost;
