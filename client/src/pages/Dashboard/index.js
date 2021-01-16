import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import Navbar from "../../components/Navbar";

function Dashboard(props) {
  const { username, email, zipCode, rating, posts } = useContext(UserContext);
  return (
    <div>
      <Navbar handleLogout={props.handleLogout} />
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
    </div>
  );
}

export default Dashboard;
