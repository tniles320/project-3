import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div>
      {/* Find Work dropdowns */}
      <form id ="find-work">
        <fieldset>
          <legend>Find Work</legend>
          <p>
            <label>Work Type </label>
            <select id="work-type">
              <option value="select">Select</option>
              <option value="Delivery & Moving">Delivery & Moving</option>
              <option value="Handyman">Handyman</option>
              <option value="IT & Admin">IT & Admin</option>
            </select>
            <label> Experience </label>
            <select id="experience">
              <option value="select">Select</option>
              <option value="0">0-1 Years</option>
              <option value="1">3-5 Years</option>
              <option value="2">5+ Years</option>
            </select>
          </p>
        </fieldset>
      </form>
      {/* Find a Worker dropdown */}
      <form id ="find-worker">
        <fieldset>
          <legend>Find a Worker</legend>
          <p>
            <label>Work Type </label>
            <select id="work-type">
              <option value="select">Select</option>
              <option value="Delivery & Moving">Delivery & Moving</option>
              <option value="Handyman">Handyman</option>
              <option value="IT & Admin">IT & Admin</option>
            </select>
            <label> Price Range </label>
            <select id="price-range">
              <option value="select">Select</option>
              <option value="0">$</option>
              <option value="1">$$</option>
              <option value="2">$$$</option>
            </select>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Sidebar;
