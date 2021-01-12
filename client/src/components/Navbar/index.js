import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../NavbarBtn";
import "./Navbar.css";

function Navbar(props) {
  const { logout } = props;
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
        ManyGigs<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={() => handleClick}>
        <i className={navBtn.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navBtn.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <button>Search</button>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
