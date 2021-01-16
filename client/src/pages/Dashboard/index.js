import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";
<<<<<<< HEAD
=======
import Sidebar from "../../components/Sidebar";
>>>>>>> 22338f39200e8900456d2313146958ea3188473c
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";

function Dashboard(props) {
  const { username, email, zipCode, rating } = useContext(UserContext);

  const [posts, setPosts] = useState([]);
  const handlePosts = () => {
    API.getPosts().then((res) => {
      res.data.map((post) => {
        let postObj = {
          id: post._id,
          user: post.user,
          username: post.username,
          title: post.title,
          description: post.description,
          amount: post.amount,
          location: post.location,
        };
        setPosts((posts) => [...posts, postObj]);
      });
    });
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
<<<<<<< HEAD

      <PostContainer posts={posts} />

      {username} {email} {zipCode} {rating} {posts}
      {/* Find Work dropdowns */}
      <form>
       <fieldset>
          <legend>Find Work</legend>
          <p>
             <label>Work Type</label>
             <select id = "work-type">
               <option value = "select">Select</option>
               <option value = "heating & cooling">Heating & Cooling</option>
               <option value = "flooring">Flooring</option>
               <option value = "carpentry">Carpentry</option>
             </select>
             <label>Experience</label>
             <select id = "experience">
               <option value = "select">Select</option>
               <option value = "0">0-1 Years</option>
               <option value = "1">3-5 Years</option>
               <option value = "2">5+ Years</option>
             </select>
          </p>
       </fieldset>
    </form>
    {/* Find a Worker dropdown */}
    <form>
       <fieldset>
          <legend>Find a Worker</legend>
          <p>
             <label>Work Type</label>
             <select id = "work-type">
               <option value = "select">Select</option>
               <option value = "heating & cooling">Heating & Cooling</option>
               <option value = "flooring">Flooring</option>
               <option value = "carpentry">Carpentry</option>
             </select>
             <label>Price Range</label>
             <select id = "price range">
               <option value = "select">Select</option>
               <option value = "0">$</option>
               <option value = "1">$$</option>
               <option value = "2">$$$</option>
             </select>
          </p>
       </fieldset>
    </form>

=======
      <Sidebar />
      <PostContainer posts={posts} />
>>>>>>> 22338f39200e8900456d2313146958ea3188473c
    </div>
  );
}

export default Dashboard;
