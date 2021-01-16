import React, { useState, useEffect, useContext } from "react";
import CurrentUserPost from "../../components/CurrentUserPost";
import NonUserPost from "../../components/NonUserPost";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function SinglePost() {
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

  if (singlePost.currentUser) {
    return (
      <div>
        <CurrentUserPost singlePost={singlePost} />
      </div>
    );
  } else {
    return (
      <div>
        <NonUserPost singlePost={singlePost} />
      </div>
    );
  }
}

export default SinglePost;
