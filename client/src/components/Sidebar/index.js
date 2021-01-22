import React from "react";
import "./style.css";

function Sidebar(props) {
  const { handleFilter, handleReset } = props;
  const work = "Find Work";
  const worker = "Find Worker";
  return (
    <div>
      {/* Find Work dropdowns */}
      <form id="find-work">
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
          </p>
          <div className="filter-btn-div">
            <button
              id="find-work-filter"
              onClick={(event) => handleFilter(worker, event)}
            >
              Filter
            </button>
          </div>
        </fieldset>
      </form>
      {/* Find a Worker dropdown */}
      <form id="find-worker">
        <fieldset>
          <legend>Find a Worker</legend>
          <p>
            <label>Work Type </label>
            <select id="worker-type">
              <option value="select">Select</option>
              <option value="Delivery & Moving">Delivery & Moving</option>
              <option value="Handyman">Handyman</option>
              <option value="IT & Admin">IT & Admin</option>
            </select>
          </p>
          <div className="filter-btn-div">
            <button
              id="find-worker-filter"
              onClick={(event) => handleFilter(work, event)}
            >
              Filter
            </button>
          </div>
        </fieldset>
      </form>
      <div id="reset-button-div">
        <button id="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
