import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Button } from "../NavbarBtn";
import "./Navbar.css";

function Navbar(props) {
  const { handleLogout } = props;
  //For button
  const [navBtn, setNavBtn] = useState({
    clicked: false,
  });

  //sets click to opposite value
  const handleClick = () => {
    setNavBtn({ clicked: !navBtn.clicked });
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        ManyGigs <i className="fas fa-comment-dollar"></i>
      </h1>
      <div className="menu-icon" onClick={() => handleClick}>
        <i className={navBtn.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navBtn.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button>Search</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
