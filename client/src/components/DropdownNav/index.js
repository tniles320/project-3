import React from "react";
import { MenuItems } from "../Navbar/MenuItems";
import { Link } from "react-router-dom";
import "./style.css";

function DropdownNav(props) {
  const { openNav, closeNav, handleLogout } = props;
  return (
    <div>
      <div id="dropdown-nav-btns">
        <button className="closebtn btn" onClick={closeNav}>
          &times;
        </button>
        <ul className="dropdown-nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <span className="nav-links" onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <button id="open-nav" className="btn" onClick={openNav}>
        &#9776;
      </button>
    </div>
  );
}

export default DropdownNav;
