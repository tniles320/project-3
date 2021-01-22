import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import axios from "axios";

function Post(props) {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const { handleLogout } = props;
  // uses input from postContainer component to create post
  const handlePost = () => {
    const title = document.getElementById("post-title").value;
    const amount = document.getElementById("post-amount").value;
    const description = document.getElementById("post-description").value;
    const location = document.getElementById("post-location").value;
    const contact = document.getElementById("post-contact").value;
    const wtype = document.getElementById("worktype");
    const worktype = wtype.options[wtype.selectedIndex].text;
    const itype = document.getElementById("worktypeinquiry");
    const worktypeinquiry = itype.options[itype.selectedIndex].text;

    // axios call
    API.submitPost(
      title,
      amount,
      description,
      location,
      worktype,
      worktypeinquiry,
      image,
      contact
    ).then(() => {
      window.location.replace("/dashboard");
      alert("Post Created!");
    });
  };
  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    await API.uploadImage(formData).then((res) => {
      setImage(res.data.path);
    });
  };
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <CreatePost
        handlePost={handlePost}
        handleUpload={handleUpload}
        handleFilechange={handleFilechange}
      />
    </div>
  );
}

export default Post;
